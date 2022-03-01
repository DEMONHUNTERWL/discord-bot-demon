require("dotenv").config();
const { Client } = require("discord.js-selfbot");
const client = new Client();
const config = require("./config/config.json");
const Logger = require("./util/log");


const randomInteger = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

const minuteToMillisec = (min) => {
    return min * 60 * 1000;
};

const hasRole = async (guildId, roleId) => {
    let guild =  await client.guilds.cache.get(guildId);
    let member = await guild.members.cache.get(process.env.CLIENTID);
    let role = await member.roles.cache.get(roleId);

    if (typeof role !== "undefined"){
        return true;
    }
    return false;
};

const invokeTimeout = async (id, message, times, guildId, roleId, mistakes, originalMessage) => {
    let time = randomInteger(minuteToMillisec(times.min), minuteToMillisec(times.max));
    setTimeout(async () => {
        if (!(await hasRole(guildId, roleId))){
            Logger.info(`Trying to send: ${message} - ${id}`);
            
            if (randomInteger(0, 1000) < config.mistakeRate){
                message = mistakes[randomInteger(0, mistakes.length-1)];
                Logger.warning(`Added mistaken message ${message}`);
            }

            await client.channels.cache.get(id).send(message).then(() => {
                if (message !== originalMessage){
                    message = originalMessage;
                    Logger.info(`Restored message to ${originalMessage}`);
                }
                invokeTimeout(id, message, times, guildId, roleId, mistakes, originalMessage);
            }).catch((err) => {
                Logger.error("Cannot send message", err);
            });
        }else{
            Logger.info(`Discord account has got the specific role. Message: ${message} RoleId: ${roleId}`)
        }
    }, time);
    Logger.info(`Sent message: ${message} - ${id}`);
    Logger.info(`Next message in: ${Math.round(time / 1000 / 60)} minutes and ${Math.round(time / 1000) % 60} seconds`);
};

const sendMessage = async (id, message, times, guildId, roleId, mistakes) => {
    const originalMessage = message;

    await client.channels.cache.get(id).send(message).catch((err) => {
        Logger.error("Cannot send message", err);
    });

    invokeTimeout(id, message, times, guildId, roleId, mistakes, originalMessage);
};

client.on("ready", async() => {
    Logger.info("Logged in");
    for(var i=0; i < config.channels.length; i++){
        await new Promise(resolve => setTimeout(resolve, randomInteger(3000,8000)));
        sendMessage(config.channels[i].id, config.channels[i].text, config.channels[i].time, config.channels[i].guild.id,config.channels[i].role.id, config.channels[i].mistakes);
    }
});


client.login(process.env.TOKEN);
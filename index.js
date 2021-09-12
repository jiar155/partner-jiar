const Discord = require("discord.js");
const client = new Discord.Client({disableEveryone: true})


client.on('message', message => { 

if (!message.guild) return; 

if (message.content === '!R') { 
 if (!message.member.hasPermission("ADMINISTRATOR"))  return;
if (message.member.voiceChannel) { 

message.member.voiceChannel.join() 

.then(connection => { 


}) 

.catch(console.log); 

} else { 

message.reply(' پێویستە تۆ لە ڤۆیسەکە بیت '); 

} 

} 

});


client.on("message" , message => {

if(message.channel.type === 'dm') {

if (message.content.startsWith("https://discord.gg/%22)) {

  message.author.send( ھات بەلاڤ کرن تو ژیک بەلاڤ کە    https://discord.gg/j3Ur3S5PgC) // لینکی سێرڤەری خۆت لیرە دابنی بە هەتا هەتای بێت

  client.channels.get("880382060504711188").send(
>  By: <@${message.author.id}> ✅ 
${message.content})
}
    }
        })




client.on('ready', () => {
console.log(ON ${client.guilds.size} Servers);
console.log(Logged in as ${client.user.tag}!);
client.user.setGame(Jiar) 
});




client.login("ODM5MDg5MDk2ODQ0NTA5MjQ0.YJEkng.CuUE0Mvd__26dGxOlaUziVpH4mI");// Your Token
Discord

module.exports = [{
  name:"yardım",
  code:`
 
$description[1;Aşağıdaki menüleri kullanri kullanarak bot hakkında yardım alabilirsiniz] $addSelectMenu[1;yardım;Menülere tıkla ve komutlar hakkında bilgi al!;1;1;false;Ayarlamalı:Ayarlamalı komutları görmek için tıkla.:0:false:⚽;Moderasyon:Moderasyon komutlarını görmek için tıkla.:1:false:⚽;Eğlence:Eğlence komutlarını görmek için tıkla.:2:false:⚽;Genel:Genel komutları görmek için tıkla.:3:false:⚽] $color[1;RANDOM] $thumbnail[1;$userAvatar[$authorID]]
  `
  },{
    name:"yardım",
    type:"interaction",
    prototype:"selectMenu",
    code:`
    $interactionReply[;{newEmbed: {title: $userTag[$clientID]} {description:
Komutlar} {thumbnail:$authorID} {color:RANDOM}};;;;yes]
   
    $onlyIf[$interactionData[values[0]]==0;]
    `
    },{
    name:"profil",
$if: "V4",
    type:"interaction",
    prototype:"selectMenu",
    code:`
     $interactionReply[;{newEmbed: {title: $userTag[$clientID]} {description:
Komutlar} {thumbnail:$authorID} {color:RANDOM}};;;;yes]



    $onlyIf[$interactionData[values[0]]==1;]

`
    },{
    name:"profil",
    type:"interaction",
    prototype:"selectMenu",
    code:`
    $interactionReply[;{newEmbed: {title: $userTag[$clientID]} {description:
Komutlar} {thumbnail:$authorID} {color:RANDOM}};;;;yes]

    $onlyIf[$interactionData[values[0]]==2;]
    `
    },{
    name:"profil",
    type:"interaction",
    prototype:"selectMenu",
    code:`
     $interactionReply[;{newEmbed: {title: $userTag[$clientID]} {description:
Komutlar} {thumbnail:$authorID} {color:RANDOM}};;;;yes]
    $onlyIf[$interactionData[values[0]]==3;]
    
    
    `
    }
                 
  ]
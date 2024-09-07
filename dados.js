let dados = [
    {
        titulo: "The Last of Us",
        categoria: "Ação/Aventura",
        descricao: "The Last of Us é uma franquia de mídia que conquistou milhões de fãs ao redor do mundo, com jogos, quadrinhos e uma série de televisão de grande sucesso. A história se passa em um futuro próximo, onde um fungo mutante transformou a maior parte da humanidade em criaturas infectadas.",
        link_sobre: "https://observatoriodegames.uol.com.br/playstation/the-last-of-us-todos-os-jogos-para-quem-ainda-nao-jogou-o-titulo",
        link_download: "https://store.epicgames.com/pt-BR/p/the-last-of-us-part-1#:~:text=The%20Last%20of%20Us%E2%84%A2,compre%20hoje%20%2D%20Epic%20Games%20Store"
    },
    {
        titulo: "Elden Ring",
        categoria: "RPG de ação",
        descricao: "Elden Ring (エルデンリング Eruden Ringu?) é um jogo eletrônico de RPG de ação em terceira pessoa, desenvolvido pela FromSoftware e publicado pela Bandai Namco Entertainment. O jogo é um projeto colaborativo entre o diretor Hidetaka Miyazaki e o romancista de fantasia.",
        link_sobre: "https://pt.wikipedia.org/wiki/Elden_Ring",
        link_download: "https://store.steampowered.com/agecheck/app/1245620/"
    },
    {
        titulo: "Counter-Strike: Global Offensive",
        categoria: "FPS",
        descricao: "Counter-Strike: Global Offensive (CS:GO) foi um jogo online desenvolvido pela Valve Corporation e pela Hidden Path Entertainment, sendo uma sequência de Counter-Strike: Source. É o quarto título principal da franquia.",
        link_sobre: "https://pt.wikipedia.org/wiki/Counter-Strike:_Global_Offensive",
        link_download: "https://store.steampowered.com/app/730/CounterStrike_2/?l=portuguese"
    },
    {
        titulo: "God of War Ragnarok",
        categoria: "Ação/Aventura",
        descricao: "Servindo como o final da era nórdica da série, o jogo dá início ao Ragnarök, uma série de eventos que trazem o fim dos tempos e retrata a morte de alguns dos deuses nórdicos, que foi predito no jogo anterior após Kratos ter matado o deus Æsir Baldur. A jogabilidade é semelhante ao título de 2018.",
        link_sobre: "https://www.playstation.com/en-us/games/god-of-war-ragnarok/",
        link_download: "https://store.playstation.com/en-us/product/UP0002-CUSA32702_00-GODOFWARRAGNAROK"
    },
    {
        titulo: "The Witcher 3: Wild Hunt",
        categoria: "RPG",
        descricao: "The Witcher 3: Wild Hunt é um RPG de ação em um mundo aberto, seguindo Geralt de Rivia em sua busca por sua filha adotiva, enquanto enfrenta monstros e se envolve em uma trama complexa.",
        link_sobre: "https://www.witcher.com/",
        link_download: "https://store.steampowered.com/app/292030/The_Witcher_3_Wild_Hunt/"
    },
    {
        titulo: "Red Dead Redemption 2",
        categoria: "Ação/Aventura",
        descricao: "Red Dead Redemption 2 se passa em 1899, quando o velho oeste está chegando ao fim. O jogador controla Arthur Morgan, um fora da lei, em sua luta pela sobrevivência enquanto enfrenta a queda da gangue Van der Linde.",
        link_sobre: "https://www.rockstargames.com/reddeadredemption2/",
        link_download: "https://store.steampowered.com/app/1152990/Red_Dead_Redemption_2/"
    },
    {
        titulo: "Cyberpunk 2077",
        categoria: "RPG",
        descricao: "Cyberpunk 2077 é uma história de aventura e ação de mundo aberto ambientada em Night City, onde os jogadores exploram e lutam contra forças poderosas em busca de glória e sobrevivência.",
        link_sobre: "https://www.cyberpunk.net/",
        link_download: "https://store.steampowered.com/app/1091500/Cyberpunk_2077/"
    },
    {
        titulo: "Minecraft",
        categoria: "Sandbox",
        descricao: "Minecraft é um jogo eletrônico onde os jogadores sobrevivem e criam em um mundo de blocos cúbicos. O jogo permite explorar, construir e se aventurar em um ambiente virtual vasto e aberto.",
        link_sobre: "https://www.minecraft.net/",
        link_download: "https://www.minecraft.net/pt-br/download"
    },
    {
        titulo: "Stardew Valley",
        categoria: "Simulador de Vida",
        descricao: "Stardew Valley é um simulador de fazenda onde os jogadores cultivam a terra, cuidam de animais e interagem com a comunidade local, buscando transformar uma fazenda em sucesso.",
        link_sobre: "https://stardewvalley.net/",
        link_download: "https://store.steampowered.com/app/413150/Stardew_Valley/"
    },
    {
        titulo: "Hollow Knight",
        categoria: "Metroidvania",
        descricao: "Hollow Knight é um jogo de ação e aventura em estilo metroidvania onde o jogador explora o reino subterrâneo de Hallownest e combate inimigos em uma jornada cheia de desafios.",
        link_sobre: "https://www.teamcherry.com/hollow-knight/",
        link_download: "https://store.steampowered.com/app/367520/Hollow_Knight/"
    },
    {
        titulo: "Hades",
        categoria: "Roguelike",
        descricao: "Hades é um jogo de ação onde o objetivo é escapar do submundo. O jogo combina combate rápido e dinâmico com uma narrativa envolvente em uma jornada por diversos níveis do inferno.",
        link_sobre: "https://supergiantgames.com/games/hades/",
        link_download: "https://store.steampowered.com/app/1145360/Hades/"
    },
    {
        titulo: "Overwatch 2",
        categoria: "FPS",
        descricao: "Overwatch 2 é um jogo de tiro em equipe, onde times de cinco jogadores lutam em um futuro otimista em batalhas que exigem cooperação e estratégia.",
        link_sobre: "https://pt.wikipedia.org/wiki/Overwatch",
        link_download: "https://playoverwatch.com/pt-br/"
    },
    {
        titulo: "Sekiro: Shadows Die Twice",
        categoria: "Ação/Aventura",
        descricao: "Sekiro: Shadows Die Twice é um jogo de ação ambientado no Japão feudal, focado em combates rápidos e desafiadores com um samurai que busca vingança.",
        link_sobre: "https://www.sekirothegame.com/",
        link_download: "https://store.steampowered.com/app/814380/Sekiro_Shadows_Die_Twice/"
    },
    {
        titulo: "Fortnite",
        categoria: "Battle Royale",
        descricao: "Fortnite é um jogo de tiro em terceira pessoa no qual 100 jogadores competem em um campo de batalha até restar apenas um vencedor, com elementos de construção.",
        link_sobre: "https://www.epicgames.com/fortnite/en-US/home",
        link_download: "https://www.epicgames.com/fortnite/en-US/download"
    },
    {
        titulo: "Apex Legends",
        categoria: "Battle Royale",
        descricao: "Apex Legends é um jogo de tiro em primeira pessoa em estilo battle royale, onde equipes de três jogadores competem para serem os últimos sobreviventes em um mapa de combate.",
        link_sobre: "https://www.ea.com/games/apex-legends",
        link_download: "https://store.steampowered.com/app/1172470/Apex_Legends/"
    },
    {
        titulo: "Resident Evil Village",
        categoria: "Horror de sobrevivência",
        descricao: "Resident Evil Village é um jogo de horror e sobrevivência que segue Ethan Winters enquanto ele busca sua filha desaparecida em uma vila aterrorizada por criaturas sombrias.",
        link_sobre: "https://www.residentevil.com/village/",
        link_download: "https://store.steampowered.com/app/1196590/Resident_Evil_Village/"
    },
    {
        titulo: "Dying Light 2",
        categoria: "Ação/RPG",
        descricao: "Dying Light 2 é um jogo de ação em mundo aberto com elementos de parkour, onde os jogadores lutam contra zumbis e fazem escolhas que afetam o futuro da cidade.",
        link_sobre: "https://dyinglight2.game/",
        link_download: "https://store.steampowered.com/app/534380/Dying_Light_2/"
    },
    {
        titulo: "Valorant",
        categoria: "FPS",
        descricao: "Valorant é um jogo de tiro tático em primeira pessoa que combina habilidades únicas de personagens com combates de alta precisão em partidas 5v5.",
        link_sobre: "https://playvalorant.com/",
        link_download: "https://playvalorant.com/pt-br/download"
    },
    {
        titulo: "Assassin's Creed Valhalla",
        categoria: "Ação/RPG",
        descricao: "Assassin's Creed Valhalla segue Eivor, um viking em busca de novas terras para sua tribo na Inglaterra do século IX, com uma mistura de combate e exploração.",
        link_sobre: "https://www.ubisoft.com/en-us/game/assassins-creed/valhalla",
        link_download: "https://store.ubisoft.com/us/assassins-creed-valhalla/5f0e53a4e9bdb055cc5fd6a6.html"
    },
    {
        titulo: "Death Stranding",
        categoria: "Ação/Aventura",
        descricao: "Death Stranding é um jogo de ação e aventura em um mundo pós-apocalíptico, onde o jogador entrega pacotes e reconecta uma nação fragmentada.",
        link_sobre: "https://www.deathstranding.jp/",
        link_download: "https://store.steampowered.com/app/1190460/DEATH_STRANDING/"
    },
    {
        titulo: "Far Cry 6",
        categoria: "Ação/Aventura",
        descricao: "Far Cry 6 é um jogo de tiro em mundo aberto situado em uma nação fictícia inspirada em Cuba, onde o jogador se rebela contra um regime opressor.",
        link_sobre: "https://www.ubisoft.com/en-us/game/far-cry/far-cry-6",
        link_download: "https://store.ubisoft.com/us/far-cry-6/5f00c4a4e9b6d1589791d0c2.html"
    },
    {
        titulo: "Ghost of Tsushima",
        categoria: "Ação/Aventura",
        descricao: "Ghost of Tsushima se passa no Japão feudal durante a invasão mongol. O jogador assume o papel de um samurai em busca de salvar sua ilha e sua cultura.",
        link_sobre: "https://www.playstation.com/en-us/games/ghost-of-tsushima/",
        link_download: "https://store.playstation.com/en-us/product/UP9000-CUSA15568_00-GOS00000000000000"
    },
    {
        titulo: "The Legend of Zelda: Breath of the Wild",
        categoria: "Ação/Aventura",
        descricao: "The Legend of Zelda: Breath of the Wild é um jogo de ação e aventura em mundo aberto onde Link explora o reino de Hyrule para derrotar Calamity Ganon e restaurar a paz.",
        link_sobre: "https://www.zelda.com/breath-of-the-wild/",
        link_download: "https://www.nintendo.com/games/detail/the-legend-of-zelda-breath-of-the-wild-switch/"
    },
    {
        titulo: "Horizon Zero Dawn",
        categoria: "Ação/Aventura",
        descricao: "Horizon Zero Dawn é um RPG de ação situado em um mundo pós-apocalíptico dominado por máquinas. A protagonista, Aloy, explora o mundo em busca de respostas sobre seu passado.",
        link_sobre: "https://www.horizonzerodawn.com/",
        link_download: "https://store.steampowered.com/app/1151640/Horizon_Zero_Dawn_Complete_Edition/"
    },
    {
        titulo: "Bloodborne",
        categoria: "Ação/RPG",
        descricao: "Bloodborne é um jogo de ação e RPG que se passa em uma cidade gótica infestada de monstros. O jogador assume o papel de um caçador em busca de respostas e sobrevivência.",
        link_sobre: "https://www.playstation.com/en-us/games/bloodborne/",
        link_download: "https://store.playstation.com/en-us/product/UP9000-CUSA00900_00-BLOODBORNE000000"
    },
    {
        titulo: "Nier: Automata",
        categoria: "Ação/RPG",
        descricao: "Nier: Automata é um RPG de ação com uma narrativa complexa, situado em um futuro distópico onde humanos e máquinas travam uma guerra devastadora.",
        link_sobre: "https://www.niergame.com/",
        link_download: "https://store.steampowered.com/app/524220/NIE_R_Automata/"
    },
    {
        titulo: "Demon's Souls",
        categoria: "Ação/RPG",
        descricao: "Demon's Souls é um RPG de ação conhecido por sua dificuldade desafiadora e sua ambientação sombria, onde os jogadores exploram um reino em ruínas repleto de monstros.",
        link_sobre: "https://www.playstation.com/en-us/games/demons-souls/",
        link_download: "https://store.playstation.com/en-us/product/UP9000-CUSA28140_00-DEM0000000000000"
    },
    {
        titulo: "Sea of Thieves",
        categoria: "Ação/Aventura",
        descricao: "Sea of Thieves é um jogo de aventura em mundo aberto com tema de piratas. Os jogadores podem explorar um vasto oceano, procurar tesouros e se enfrentar em batalhas navais.",
        link_sobre: "https://www.seaofthieves.com/",
        link_download: "https://www.microsoft.com/store/p/sea-of-thieves/9nblggh5l9x3"
    },
    {
        titulo: "Forza Horizon 5",
        categoria: "Corrida",
        descricao: "Forza Horizon 5 é um jogo de corrida em mundo aberto que apresenta uma recriação detalhada do México e oferece uma grande variedade de carros e eventos.",
        link_sobre: "https://www.forzaforums.com/",
        link_download: "https://www.microsoft.com/store/p/forza-horizon-5/9nblggh5l9x3"
    },
    {
        titulo: "Gran Turismo 7",
        categoria: "Corrida",
        descricao: "Gran Turismo 7 é um simulador de corrida que oferece uma vasta coleção de carros e pistas, com um foco em realismo e personalização.",
        link_sobre: "https://www.gran-turismo.com/",
        link_download: "https://store.playstation.com/en-us/product/UP9000-CUSA37926_00-GT7INTRODUCTION"
    },
    {
        titulo: "Rocket League",
        categoria: "Esporte",
        descricao: "Rocket League é um jogo que combina futebol e carros, onde equipes competem para marcar gols em uma arena utilizando veículos customizáveis.",
        link_sobre: "https://www.rocketleague.com/",
        link_download: "https://store.steampowered.com/app/252950/Rocket_League/"
    },
    {
        titulo: "FIFA 23",
        categoria: "Esporte",
        descricao: "FIFA 23 é a mais recente adição à popular franquia de jogos de futebol, oferecendo modos de jogo realistas e atualizações das ligas e equipes do mundo todo.",
        link_sobre: "https://www.ea.com/games/fifa/fifa-23",
        link_download: "https://store.steampowered.com/app/1811260/FIFA_23/"
    },
    {
        titulo: "NBA 2K24",
        categoria: "Esporte",
        descricao: "NBA 2K24 é um simulador de basquete que oferece uma experiência imersiva com gráficos realistas, jogabilidade aprimorada e modos de jogo diversos.",
        link_sobre: "https://www.nba2k.com/",
        link_download: "https://store.steampowered.com/app/2077220/NBA_2K24/"
    },
    {
        titulo: "The Sims 4",
        categoria: "Simulador de Vida",
        descricao: "The Sims 4 é um simulador de vida onde os jogadores criam e controlam personagens, gerenciam suas vidas, casas e relacionamentos em um mundo virtual.",
        link_sobre: "https://www.ea.com/games/the-sims/the-sims-4",
        link_download: "https://www.ea.com/games/the-sims/the-sims-4"
    },
    {
        titulo: "Cities: Skylines",
        categoria: "Simulador",
        descricao: "Cities: Skylines é um simulador de construção e gerenciamento de cidades, oferecendo aos jogadores a oportunidade de projetar e administrar uma metrópole.",
        link_sobre: "https://www.citiesskylines.com/",
        link_download: "https://store.steampowered.com/app/255710/Cities_Skylines/"
    },
    {
        titulo: "Planet Coaster",
        categoria: "Simulador",
        descricao: "Planet Coaster é um simulador de parque de diversões onde os jogadores constroem e gerenciam montanhas-russas e atrações em um parque temático.",
        link_sobre: "https://www.planetcoaster.com/",
        link_download: "https://store.steampowered.com/app/493340/Planet_Coaster/"
    },
    {
        titulo: "RollerCoaster Tycoon 3",
        categoria: "Simulador",
        descricao: "RollerCoaster Tycoon 3 é um simulador clássico de gerenciamento de parques de diversões, onde os jogadores constroem e administram parques temáticos.",
        link_sobre: "https://pt.wikipedia.org/wiki/RollerCoaster_Tycoon_3",
        link_download: "https://store.steampowered.com/app/1368820/RollerCoaster_Tycoon_3_Complete_Edition/"
    },
    {
        titulo: "Dark Souls III",
        categoria: "Ação/RPG",
        descricao: "Dark Souls III é um jogo de RPG de ação desafiador que se passa em um mundo de fantasia sombria, onde os jogadores enfrentam inimigos poderosos e chefões em combates estratégicos.",
        link_sobre: "https://pt.wikipedia.org/wiki/Dark_Souls_III",
        link_download: "https://store.steampowered.com/app/374320/DARK_SOULS_III/"
    },
    {
        titulo: "Metal Gear Solid V: The Phantom Pain",
        categoria: "Ação/Furtividade",
        descricao: "Metal Gear Solid V: The Phantom Pain é um jogo de ação furtiva em mundo aberto que segue Snake em sua missão de vingança, com ênfase em liberdade de abordagem e táticas.",
        link_sobre: "https://www.konami.com/mg/mgs5/",
        link_download: "https://store.steampowered.com/app/287700/Metal_Gear_Solid_V_The_Phantom_Pain/"
    },
    {
        titulo: "Final Fantasy VII Remake",
        categoria: "RPG",
        descricao: "Final Fantasy VII Remake é uma reimaginação do clássico RPG da Square Enix, trazendo gráficos modernos, jogabilidade dinâmica e uma narrativa expandida.",
        link_sobre: "https://ffvii-remake.square-enix-games.com/en-us",
        link_download: "https://store.playstation.com/en-us/product/UP0082-CUSA07211_00-FFVIIREMAKE00000"
    },
    {
        titulo: "Super Mario Odyssey",
        categoria: "Aventura/Plataforma",
        descricao: "Super Mario Odyssey é um jogo de plataforma 3D onde Mario viaja por diferentes reinos para resgatar a Princesa Peach das garras de Bowser, com mecânicas inovadoras de chapéu.",
        link_sobre: "https://www.nintendo.com/games/detail/super-mario-odyssey-switch/",
        link_download: "https://www.nintendo.com/store/products/super-mario-odyssey-switch/"
    },
    {
        titulo: "Doom Eternal",
        categoria: "FPS",
        descricao: "Doom Eternal é um jogo de tiro em primeira pessoa rápido e frenético, onde o jogador assume o papel do Doom Slayer para combater demônios em diferentes dimensões.",
        link_sobre: "https://doom.fandom.com/wiki/Doom_Eternal",
        link_download: "https://store.steampowered.com/app/782330/DOOM_Eternal/"
    },
    {
        titulo: "Ghostrunner",
        categoria: "Ação/Cyberpunk",
        descricao: "Ghostrunner é um jogo de ação em primeira pessoa ambientado em um futuro cyberpunk, onde o jogador corre pelas paredes e utiliza uma espada para derrotar inimigos em alta velocidade.",
        link_sobre: "https://ghostrunnergame.com/",
        link_download: "https://store.steampowered.com/app/1139900/Ghostrunner/"
    },
    {
        titulo: "Among Us",
        categoria: "Multijogador",
        descricao: "Among Us é um jogo multiplayer online onde os jogadores tentam completar tarefas em uma nave enquanto descobrem quem entre eles é o impostor assassino.",
        link_sobre: "https://innersloth.com/gameAmongUs.php",
        link_download: "https://store.steampowered.com/app/945360/Among_Us/"
    },
    {
        titulo: "Terraria",
        categoria: "Aventura/Sandbox",
        descricao: "Terraria é um jogo de aventura em mundo aberto onde os jogadores podem explorar, construir e lutar contra inimigos e chefes, com mecânicas de sobrevivência e crafting.",
        link_sobre: "https://terraria.org/",
        link_download: "https://store.steampowered.com/app/105600/Terraria/"
    },
    {
        titulo: "Subnautica",
        categoria: "Aventura/Survival",
        descricao: "Subnautica é um jogo de sobrevivência e exploração subaquática em um planeta alienígena, onde os jogadores devem encontrar recursos e desvendar mistérios.",
        link_sobre: "https://unknownworlds.com/subnautica/",
        link_download: "https://store.steampowered.com/app/264710/Subnautica/"
    },
    {
        titulo: "Fall Guys",
        categoria: "Battle Royale/Party",
        descricao: "Fall Guys é um jogo multiplayer de festa em estilo battle royale, onde os jogadores competem em uma série de desafios caóticos até restar apenas um vencedor.",
        link_sobre: "https://www.fallguys.com/",
        link_download: "https://store.epicgames.com/en-US/p/fall-guys"
    },
    {
        titulo: "Cuphead",
        categoria: "Plataforma",
        descricao: "Cuphead é um jogo de plataforma e ação inspirado em desenhos animados dos anos 1930, com um estilo visual único e jogabilidade focada em batalhas contra chefes.",
        link_sobre: "https://www.cupheadgame.com/",
        link_download: "https://store.steampowered.com/app/268910/Cuphead/"
    },
    {
        titulo: "Horizon Forbidden West",
        categoria: "Ação/RPG",
        descricao: "Horizon Forbidden West é a sequência de Horizon Zero Dawn, onde a protagonista Aloy explora novas terras e enfrenta ameaças maiores em um mundo pós-apocalíptico dominado por máquinas.",
        link_sobre: "https://www.playstation.com/en-us/games/horizon-forbidden-west/",
        link_download: "https://store.playstation.com/en-us/product/UP9000-CUSA24769_00-HFWDELUXEEDITION"
    },
    {
        titulo: "Nioh 2",
        categoria: "Ação/RPG",
        descricao: "Nioh 2 é um jogo de ação e RPG que combina combate samurai com elementos sobrenaturais, desafiando os jogadores a derrotar demônios e chefes formidáveis.",
        link_sobre: "https://teamninja-studio.com/nioh2/",
        link_download: "https://store.steampowered.com/app/1325200/Nioh_2_The_Complete_Edition/"
    },
    {
        titulo: "It Takes Two",
        categoria: "Aventura/Cooperativo",
        descricao: "It Takes Two é um jogo cooperativo de aventura que segue a jornada de dois personagens em um mundo fantástico, com uma jogabilidade que requer trabalho em equipe.",
        link_sobre: "https://www.ea.com/games/it-takes-two",
        link_download: "https://store.steampowered.com/app/1426210/It_Takes_Two/"
    },
    {
        titulo: "The Outer Worlds",
        categoria: "RPG",
        descricao: "The Outer Worlds é um RPG de ficção científica em primeira pessoa, onde os jogadores exploram colônias espaciais e tomam decisões que afetam o destino do universo.",
        link_sobre: "https://outerworlds.obsidian.net/en",
        link_download: "https://store.steampowered.com/app/578650/The_Outer_Worlds/"
    },
    {
        titulo: "Control",
        categoria: "Ação/Aventura",
        descricao: "Control é um jogo de ação e aventura em terceira pessoa, onde os jogadores exploram um prédio governamental misterioso enquanto utilizam poderes sobrenaturais para combater ameaças.",
        link_sobre: "https://controlgame.com/",
        link_download: "https://store.steampowered.com/app/870780/Control_Ultimate_Edition/"
    },
    {
        titulo: "Borderlands 3",
        categoria: "FPS/RPG",
        descricao: "Borderlands 3 é um jogo de tiro em primeira pessoa com elementos de RPG, que mistura humor e ação frenética em um mundo pós-apocalíptico cheio de personagens excêntricos.",
        link_sobre: "https://borderlands.com/",
        link_download: "https://store.steampowered.com/app/397540/Borderlands_3/"
    },
    {
        titulo: "Dishonored 2",
        categoria: "Ação/Furtividade",
        descricao: "Dishonored 2 é um jogo de ação furtiva em primeira pessoa, onde os jogadores podem escolher entre dois personagens com habilidades sobrenaturais para realizar missões em um mundo steampunk.",
        link_sobre: "https://dishonored.bethesda.net/",
        link_download: "https://store.steampowered.com/app/403640/Dishonored_2/"
    },
    {
        titulo: "Bayonetta 2",
        categoria: "Ação",
        descricao: "Bayonetta 2 é um jogo de ação estilizada onde a protagonista, uma poderosa bruxa, luta contra anjos e demônios usando ataques extravagantes e combates coreografados.",
        link_sobre: "https://www.nintendo.com/games/detail/bayonetta-2-switch/",
        link_download: "https://www.nintendo.com/store/products/bayonetta-2-switch/"
    },
    {
        titulo: "Sonic Mania",
        categoria: "Plataforma",
        descricao: "Sonic Mania é um jogo de plataforma que homenageia os clássicos da franquia Sonic, trazendo fases nostálgicas e novas aventuras para o ouriço mais rápido dos videogames.",
        link_sobre: "https://www.sonicthehedgehog.com/mania",
        link_download: "https://store.steampowered.com/app/584400/Sonic_Mania/"
    }
];
# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

seed_image_arr = [
  "https://s3-us-west-1.amazonaws.com/imaginarynumblr/seeddata/profilepicture/penguin.png",
  "https://s3-us-west-1.amazonaws.com/imaginarynumblr/seeddata/profilepicture/r36.jpeg",
  "https://s3-us-west-1.amazonaws.com/imaginarynumblr/seeddata/profilepicture/r15.jpeg",
  "https://s3-us-west-1.amazonaws.com/imaginarynumblr/seeddata/profilepicture/vdfvdf.jpeg",
  "https://s3-us-west-1.amazonaws.com/imaginarynumblr/seeddata/profilepicture/rockt.png",
  "https://s3-us-west-1.amazonaws.com/imaginarynumblr/seeddata/profilepicture/weirdthing.jpeg",
  "https://s3-us-west-1.amazonaws.com/imaginarynumblr/seeddata/profilepicture/r9.jpeg",
  "https://s3-us-west-1.amazonaws.com/imaginarynumblr/seeddata/profilepicture/ch.jpeg",
  "https://s3-us-west-1.amazonaws.com/imaginarynumblr/seeddata/profilepicture/lul.jpeg",
  "https://s3-us-west-1.amazonaws.com/imaginarynumblr/seeddata/profilepicture/r19.jpeg",
  "https://s3-us-west-1.amazonaws.com/imaginarynumblr/seeddata/profilepicture/pengu.jpeg",
  "https://s3-us-west-1.amazonaws.com/imaginarynumblr/seeddata/profilepicture/lego.png",
  "https://s3-us-west-1.amazonaws.com/imaginarynumblr/seeddata/profilepicture/r28.jpeg",
  "https://s3-us-west-1.amazonaws.com/imaginarynumblr/seeddata/profilepicture/r31.jpeg",
  "https://s3-us-west-1.amazonaws.com/imaginarynumblr/seeddata/profilepicture/r4.jpeg",
  "https://s3-us-west-1.amazonaws.com/imaginarynumblr/seeddata/profilepicture/r6.jpeg",
  "https://s3-us-west-1.amazonaws.com/imaginarynumblr/seeddata/profilepicture/wm.png",
  "https://s3-us-west-1.amazonaws.com/imaginarynumblr/seeddata/profilepicture/trump.jpeg",
  "https://s3-us-west-1.amazonaws.com/imaginarynumblr/seeddata/profilepicture/r10.jpeg",
  "https://s3-us-west-1.amazonaws.com/imaginarynumblr/seeddata/profilepicture/llama.jpeg",
  "https://s3-us-west-1.amazonaws.com/imaginarynumblr/seeddata/profilepicture/r11.png",
  "https://s3-us-west-1.amazonaws.com/imaginarynumblr/seeddata/profilepicture/r48.png",
  "https://s3-us-west-1.amazonaws.com/imaginarynumblr/seeddata/profilepicture/r2.jpeg",
  "https://s3-us-west-1.amazonaws.com/imaginarynumblr/seeddata/profilepicture/pku.png",
  "https://s3-us-west-1.amazonaws.com/imaginarynumblr/seeddata/profilepicture/r5.jpeg",
  "https://s3-us-west-1.amazonaws.com/imaginarynumblr/seeddata/profilepicture/r42.jpeg",
  "https://s3-us-west-1.amazonaws.com/imaginarynumblr/seeddata/profilepicture/r16.jpeg",
  "https://s3-us-west-1.amazonaws.com/imaginarynumblr/seeddata/profilepicture/download.png",
  "https://s3-us-west-1.amazonaws.com/imaginarynumblr/seeddata/profilepicture/r34.jpeg",
  "https://s3-us-west-1.amazonaws.com/imaginarynumblr/seeddata/profilepicture/anon.jpeg",
  "https://s3-us-west-1.amazonaws.com/imaginarynumblr/seeddata/profilepicture/steam.png",
  "https://s3-us-west-1.amazonaws.com/imaginarynumblr/seeddata/profilepicture/r38.jpeg",
  "https://s3-us-west-1.amazonaws.com/imaginarynumblr/seeddata/profilepicture/haccked.jpeg",
  "https://s3-us-west-1.amazonaws.com/imaginarynumblr/seeddata/profilepicture/bloop.jpeg",
  "https://s3-us-west-1.amazonaws.com/imaginarynumblr/seeddata/profilepicture/toilet.jpeg",
  "https://s3-us-west-1.amazonaws.com/imaginarynumblr/seeddata/profilepicture/r32.png",
  "https://s3-us-west-1.amazonaws.com/imaginarynumblr/seeddata/profilepicture/watching.jpeg",
  "https://s3-us-west-1.amazonaws.com/imaginarynumblr/seeddata/profilepicture/dst.jpeg",
  "https://s3-us-west-1.amazonaws.com/imaginarynumblr/seeddata/profilepicture/r8.png",
  "https://s3-us-west-1.amazonaws.com/imaginarynumblr/seeddata/profilepicture/r39.png",
  "https://s3-us-west-1.amazonaws.com/imaginarynumblr/seeddata/profilepicture/mario.jpeg",
  "https://s3-us-west-1.amazonaws.com/imaginarynumblr/seeddata/profilepicture/mm.jpeg",
  "https://s3-us-west-1.amazonaws.com/imaginarynumblr/seeddata/profilepicture/r44.png",
  "https://s3-us-west-1.amazonaws.com/imaginarynumblr/seeddata/profilepicture/bloop2.jpeg",
  "https://s3-us-west-1.amazonaws.com/imaginarynumblr/seeddata/profilepicture/cat-profile.png",
  "https://s3-us-west-1.amazonaws.com/imaginarynumblr/seeddata/profilepicture/robo.png",
  "https://s3-us-west-1.amazonaws.com/imaginarynumblr/seeddata/profilepicture/sadbunny.png",
  "https://s3-us-west-1.amazonaws.com/imaginarynumblr/seeddata/profilepicture/crai.jpeg",
  "https://s3-us-west-1.amazonaws.com/imaginarynumblr/seeddata/profilepicture/atm.png",
  "https://s3-us-west-1.amazonaws.com/imaginarynumblr/seeddata/profilepicture/r35.png",
  "https://s3-us-west-1.amazonaws.com/imaginarynumblr/seeddata/profilepicture/poke.png",
  "https://s3-us-west-1.amazonaws.com/imaginarynumblr/seeddata/profilepicture/mc.png",
  "https://s3-us-west-1.amazonaws.com/imaginarynumblr/seeddata/profilepicture/r46.jpeg",
  "https://s3-us-west-1.amazonaws.com/imaginarynumblr/seeddata/profilepicture/r17.png",
  "https://s3-us-west-1.amazonaws.com/imaginarynumblr/seeddata/profilepicture/r27.jpeg",
  "https://s3-us-west-1.amazonaws.com/imaginarynumblr/seeddata/profilepicture/rc.png",
  "https://s3-us-west-1.amazonaws.com/imaginarynumblr/seeddata/profilepicture/patreon.png",
  "https://s3-us-west-1.amazonaws.com/imaginarynumblr/seeddata/profilepicture/animeg.jpeg",
  "https://s3-us-west-1.amazonaws.com/imaginarynumblr/seeddata/profilepicture/mostache.png",
  "https://s3-us-west-1.amazonaws.com/imaginarynumblr/seeddata/profilepicture/st.jpeg",
  "https://s3-us-west-1.amazonaws.com/imaginarynumblr/seeddata/profilepicture/r30.jpeg",
  "https://s3-us-west-1.amazonaws.com/imaginarynumblr/seeddata/profilepicture/r20.jpeg",
  "https://s3-us-west-1.amazonaws.com/imaginarynumblr/seeddata/profilepicture/smiley.jpeg",
  "https://s3-us-west-1.amazonaws.com/imaginarynumblr/seeddata/profilepicture/rando1.jpeg",
  "https://s3-us-west-1.amazonaws.com/imaginarynumblr/seeddata/profilepicture/r33.jpeg",
  "https://s3-us-west-1.amazonaws.com/imaginarynumblr/seeddata/profilepicture/r43.jpeg",
  "https://s3-us-west-1.amazonaws.com/imaginarynumblr/seeddata/profilepicture/r40.jpeg",
  "https://s3-us-west-1.amazonaws.com/imaginarynumblr/seeddata/profilepicture/r3.jpeg",
  "https://s3-us-west-1.amazonaws.com/imaginarynumblr/seeddata/profilepicture/r29.jpeg",
  "https://s3-us-west-1.amazonaws.com/imaginarynumblr/seeddata/profilepicture/r47.jpeg",
  "https://s3-us-west-1.amazonaws.com/imaginarynumblr/seeddata/profilepicture/r1.jpeg",
  "https://s3-us-west-1.amazonaws.com/imaginarynumblr/seeddata/profilepicture/cowcake.jpeg",
  "https://s3-us-west-1.amazonaws.com/imaginarynumblr/seeddata/profilepicture/r24.jpeg",
  "https://s3-us-west-1.amazonaws.com/imaginarynumblr/seeddata/profilepicture/paint.jpeg",
  "https://s3-us-west-1.amazonaws.com/imaginarynumblr/seeddata/profilepicture/r18.jpeg",
  "https://s3-us-west-1.amazonaws.com/imaginarynumblr/seeddata/profilepicture/r12.jpeg",
  "https://s3-us-west-1.amazonaws.com/imaginarynumblr/seeddata/profilepicture/r45.png",
  "https://s3-us-west-1.amazonaws.com/imaginarynumblr/seeddata/profilepicture/urf.jpeg",
  "https://s3-us-west-1.amazonaws.com/imaginarynumblr/seeddata/profilepicture/rand2.jpeg",
  "https://s3-us-west-1.amazonaws.com/imaginarynumblr/seeddata/profilepicture/r22.jpeg",
  "https://s3-us-west-1.amazonaws.com/imaginarynumblr/seeddata/profilepicture/r14.png",
  "https://s3-us-west-1.amazonaws.com/imaginarynumblr/seeddata/profilepicture/r13.png",
  "https://s3-us-west-1.amazonaws.com/imaginarynumblr/seeddata/profilepicture/rando.jpeg",
  "https://s3-us-west-1.amazonaws.com/imaginarynumblr/seeddata/profilepicture/r21.jpeg",
  "https://s3-us-west-1.amazonaws.com/imaginarynumblr/seeddata/profilepicture/r8.jpeg",
  "https://s3-us-west-1.amazonaws.com/imaginarynumblr/seeddata/profilepicture/r26.jpeg",
  "https://s3-us-west-1.amazonaws.com/imaginarynumblr/seeddata/profilepicture/random2.jpeg",
  "https://s3-us-west-1.amazonaws.com/imaginarynumblr/seeddata/profilepicture/mario.png",
  "https://s3-us-west-1.amazonaws.com/imaginarynumblr/seeddata/profilepicture/r7.jpeg",
  "https://s3-us-west-1.amazonaws.com/imaginarynumblr/seeddata/profilepicture/plushie.jpeg",
  "https://s3-us-west-1.amazonaws.com/imaginarynumblr/seeddata/profilepicture/r37.jpeg",
  "https://s3-us-west-1.amazonaws.com/imaginarynumblr/seeddata/profilepicture/ab.jpeg",
  "https://s3-us-west-1.amazonaws.com/imaginarynumblr/seeddata/profilepicture/randodice.jpeg",
  "https://s3-us-west-1.amazonaws.com/imaginarynumblr/seeddata/profilepicture/r50.jpeg",
  "https://s3-us-west-1.amazonaws.com/imaginarynumblr/seeddata/profilepicture/r41.jpeg",
  "https://s3-us-west-1.amazonaws.com/imaginarynumblr/seeddata/profilepicture/pokeball.png",
  "https://s3-us-west-1.amazonaws.com/imaginarynumblr/seeddata/profilepicture/r49.jpeg",
  "https://s3-us-west-1.amazonaws.com/imaginarynumblr/seeddata/profilepicture/r25.jpeg",
  "https://s3-us-west-1.amazonaws.com/imaginarynumblr/seeddata/profilepicture/randomg.jpeg",
  "https://s3-us-west-1.amazonaws.com/imaginarynumblr/seeddata/profilepicture/usb.png"
]

seed_audio_arr = [
  "https://s3-us-west-1.amazonaws.com/imaginarynumblr/seeddata/audio/Professor_Kliq_-_03_-_Bust_This_Bust_That.mp3",
  "https://s3-us-west-1.amazonaws.com/imaginarynumblr/seeddata/audio/Josh_Woodward_-_01_-_I_Want_To_Destroy_Something_Beautiful (1).mp3",
  "https://s3-us-west-1.amazonaws.com/imaginarynumblr/seeddata/audio/Lee_Maddeford_-_09_-_Le_petit_jardin_with_Les_Gauchers_Orchestra.mp3",
  "https://s3-us-west-1.amazonaws.com/imaginarynumblr/seeddata/audio/Fabrizio_Paterlini_-_01_-_Veloma.mp3",
  "https://s3-us-west-1.amazonaws.com/imaginarynumblr/seeddata/audio/Comfort_Fit_-_03_-_Sorry.mp3",
  "https://s3-us-west-1.amazonaws.com/imaginarynumblr/seeddata/audio/Halogen_-_03_-_Length_and_Brecht_Synaecide_Remix.mp3",
  "https://s3-us-west-1.amazonaws.com/imaginarynumblr/seeddata/audio/Krillminima_-_01_-_Sommerdellen.mp3",
  "https://s3-us-west-1.amazonaws.com/imaginarynumblr/seeddata/audio/Dexter_Britain_-_05_-_Seeing_The_Future.mp3",
  "https://s3-us-west-1.amazonaws.com/imaginarynumblr/seeddata/audio/Kevin_MacLeod_-_Ghost_Dance.mp3",
  "https://s3-us-west-1.amazonaws.com/imaginarynumblr/seeddata/audio/Karaoke_Mouse_-_04_-_Shanghai_Reggae_DJ_Sides_Alternate_Take.mp3",
  "https://s3-us-west-1.amazonaws.com/imaginarynumblr/seeddata/audio/Monopole_-_02_-_Stereo-vision_radio.mp3",
  "https://s3-us-west-1.amazonaws.com/imaginarynumblr/seeddata/audio/adcBicycle_-_02_-_poor_economic_policies.mp3",
  "https://s3-us-west-1.amazonaws.com/imaginarynumblr/seeddata/audio/Nobara_Hayakawa_-_01_-_Trail.mp3",
  "https://s3-us-west-1.amazonaws.com/imaginarynumblr/seeddata/audio/The_Orientalist_-_06_-_Islamatronic_cantilliation.mp3",
  "https://s3-us-west-1.amazonaws.com/imaginarynumblr/seeddata/audio/Erdbeerschnitzel_-_Walkampfchampagne.mp3",
  "https://s3-us-west-1.amazonaws.com/imaginarynumblr/seeddata/audio/Keinzweiter_-_Mircoobee.mp3",
  "https://s3-us-west-1.amazonaws.com/imaginarynumblr/seeddata/audio/Josh_Woodward_-_01_-_I_Want_To_Destroy_Something_Beautiful.mp3",
  "https://s3-us-west-1.amazonaws.com/imaginarynumblr/seeddata/audio/Brad_Sucks_-_07_-_Total_Breakdown.mp3",
  "https://s3-us-west-1.amazonaws.com/imaginarynumblr/seeddata/audio/Dexter_Britain_-_06_-_Summers_Coming.mp3",
  "https://s3-us-west-1.amazonaws.com/imaginarynumblr/seeddata/audio/Choc_-_01_-_Eigenvalue_Subspace_Decomposition.mp3",
  "https://s3-us-west-1.amazonaws.com/imaginarynumblr/seeddata/audio/Entertainment_for_the_Braindead_-_04_-_run.mp3",
  "https://s3-us-west-1.amazonaws.com/imaginarynumblr/seeddata/audio/Robin_Grey_-_01_-_These_Days.mp3",
  "https://s3-us-west-1.amazonaws.com/imaginarynumblr/seeddata/audio/Kriss_-_03_-_jazz_club.mp3",
  "https://s3-us-west-1.amazonaws.com/imaginarynumblr/seeddata/audio/Kai_Engel_-_04_-_Moonlight_Reprise.mp3",
  "https://s3-us-west-1.amazonaws.com/imaginarynumblr/seeddata/audio/Dexter_Britain_-_11_-_Wonderland_Instrumental.mp3",
  "https://s3-us-west-1.amazonaws.com/imaginarynumblr/seeddata/audio/Paper_Navy_-_08_-_Swan_Song.mp3",
  "https://s3-us-west-1.amazonaws.com/imaginarynumblr/seeddata/audio/The_Lights_Galaxia_-_02_-_While_She_Sleeps_Morning_Edit.mp3",
  "https://s3-us-west-1.amazonaws.com/imaginarynumblr/seeddata/audio/Chris_Zabriskie_-_01_-_The_Temperature_of_the_Air_on_the_Bow_of_the_Kaleetan.mp3",
  "https://s3-us-west-1.amazonaws.com/imaginarynumblr/seeddata/audio/Stephan_Siebert_-_07_-_when.mp3",
  "https://s3-us-west-1.amazonaws.com/imaginarynumblr/seeddata/audio/Chris_Zabriskie_-_23_-_Prelude_No_23.mp3"
]

seed_photo_arr = [
  "https://s3-us-west-1.amazonaws.com/imaginarynumblr/seeddata/images/pexels-photo-934868.jpeg",
  "https://s3-us-west-1.amazonaws.com/imaginarynumblr/seeddata/images/pexels-photo-849810.jpeg",
  "https://s3-us-west-1.amazonaws.com/imaginarynumblr/seeddata/images/pexels-photo-933588.jpeg",
  "https://s3-us-west-1.amazonaws.com/imaginarynumblr/seeddata/images/pexels-photo-936045.jpeg",
  "https://s3-us-west-1.amazonaws.com/imaginarynumblr/seeddata/images/pexels-photo-859892.jpeg",
  "https://s3-us-west-1.amazonaws.com/imaginarynumblr/seeddata/images/pexels-photo-838846.jpeg",
  "https://s3-us-west-1.amazonaws.com/imaginarynumblr/seeddata/images/pexels-photo-587015.jpeg",
  "https://s3-us-west-1.amazonaws.com/imaginarynumblr/seeddata/images/pexels-photo-935976.jpeg",
  "https://s3-us-west-1.amazonaws.com/imaginarynumblr/seeddata/images/pexels-photo-602794.jpeg",
  "https://s3-us-west-1.amazonaws.com/imaginarynumblr/seeddata/images/pexels-photo-376361.jpeg",
  "https://s3-us-west-1.amazonaws.com/imaginarynumblr/seeddata/images/pexels-photo-941245.jpeg",
  "https://s3-us-west-1.amazonaws.com/imaginarynumblr/seeddata/images/pexels-photo-938962.jpeg",
  "https://s3-us-west-1.amazonaws.com/imaginarynumblr/seeddata/images/pexels-photo-122334.jpeg",
  "https://s3-us-west-1.amazonaws.com/imaginarynumblr/seeddata/images/pexels-photo-939962.jpeg",
  "https://s3-us-west-1.amazonaws.com/imaginarynumblr/seeddata/images/pexels-photo-940301.jpeg",
  "https://s3-us-west-1.amazonaws.com/imaginarynumblr/seeddata/images/pexels-photo-935868.jpeg",
  "https://s3-us-west-1.amazonaws.com/imaginarynumblr/seeddata/images/pexels-photo-840643.jpeg",
  "https://s3-us-west-1.amazonaws.com/imaginarynumblr/seeddata/images/pexels-photo-341372.jpeg",
  "https://s3-us-west-1.amazonaws.com/imaginarynumblr/seeddata/images/pexels-photo-322207.jpeg",
  "https://s3-us-west-1.amazonaws.com/imaginarynumblr/seeddata/images/pexels-photo-935997.jpeg",
  "https://s3-us-west-1.amazonaws.com/imaginarynumblr/seeddata/images/pexels-photo-610294.jpeg",
  "https://s3-us-west-1.amazonaws.com/imaginarynumblr/seeddata/images/pexels-photo-938961.jpeg",
  "https://s3-us-west-1.amazonaws.com/imaginarynumblr/seeddata/images/pexels-photo-828381.jpeg",
  "https://s3-us-west-1.amazonaws.com/imaginarynumblr/seeddata/images/pexels-photo-993022.jpeg",
  "https://s3-us-west-1.amazonaws.com/imaginarynumblr/seeddata/images/pexels-photo-346895.jpeg",
  "https://s3-us-west-1.amazonaws.com/imaginarynumblr/seeddata/images/pexels-photo-938960.jpeg",
  "https://s3-us-west-1.amazonaws.com/imaginarynumblr/seeddata/images/pexels-photo-991072.jpeg",
  "https://s3-us-west-1.amazonaws.com/imaginarynumblr/seeddata/images/pexels-photo-948888.jpeg",
  "https://s3-us-west-1.amazonaws.com/imaginarynumblr/seeddata/images/pexels-photo-935959.jpeg",
  "https://s3-us-west-1.amazonaws.com/imaginarynumblr/seeddata/images/pexels-photo-939934.jpeg",
  "https://s3-us-west-1.amazonaws.com/imaginarynumblr/seeddata/images/pexels-photo-313104.jpeg",
  "https://s3-us-west-1.amazonaws.com/imaginarynumblr/seeddata/images/pexels-photo-404171.jpeg",
  "https://s3-us-west-1.amazonaws.com/imaginarynumblr/seeddata/images/pexels-photo-847402.jpeg",
  "https://s3-us-west-1.amazonaws.com/imaginarynumblr/seeddata/images/pexels-photo-52903.jpeg",
  "https://s3-us-west-1.amazonaws.com/imaginarynumblr/seeddata/images/pexels-photo-935791.jpeg",
  "https://s3-us-west-1.amazonaws.com/imaginarynumblr/seeddata/images/pexels-photo-365194.jpeg",
  "https://s3-us-west-1.amazonaws.com/imaginarynumblr/seeddata/images/pexels-photo-948898.jpeg",
  "https://s3-us-west-1.amazonaws.com/imaginarynumblr/seeddata/images/pexels-photo-412537.jpeg",
  "https://s3-us-west-1.amazonaws.com/imaginarynumblr/seeddata/images/pexels-photo-834977.jpeg",
  "https://s3-us-west-1.amazonaws.com/imaginarynumblr/seeddata/images/pexels-photo-931007.jpeg",
  "https://s3-us-west-1.amazonaws.com/imaginarynumblr/seeddata/images/pexels-photo-238631.jpeg",
  "https://s3-us-west-1.amazonaws.com/imaginarynumblr/seeddata/images/pexels-photo-863977.jpeg",
  "https://s3-us-west-1.amazonaws.com/imaginarynumblr/seeddata/images/pexels-photo-993019.jpeg",
  "https://s3-us-west-1.amazonaws.com/imaginarynumblr/seeddata/images/pexels-photo-574345.jpeg",
  "https://s3-us-west-1.amazonaws.com/imaginarynumblr/seeddata/images/pexels-photo-935941.jpeg",
  "https://s3-us-west-1.amazonaws.com/imaginarynumblr/seeddata/images/pexels-photo-929812.jpeg",
  "https://s3-us-west-1.amazonaws.com/imaginarynumblr/seeddata/images/pexels-photo-591216.jpeg",
  "https://s3-us-west-1.amazonaws.com/imaginarynumblr/seeddata/images/pexels-photo-995301.jpeg",
  "https://s3-us-west-1.amazonaws.com/imaginarynumblr/seeddata/images/pexels-photo-105813.jpeg",
  "https://s3-us-west-1.amazonaws.com/imaginarynumblr/seeddata/images/pexels-photo.jpg"
]


seed_video_arr = [
  "https://s3-us-west-1.amazonaws.com/imaginarynumblr/seeddata/video/722783966.mp4",
  "https://s3-us-west-1.amazonaws.com/imaginarynumblr/seeddata/video/722783965.mp4",
  "https://s3-us-west-1.amazonaws.com/imaginarynumblr/seeddata/video/924814899.mp4",
  "https://s3-us-west-1.amazonaws.com/imaginarynumblr/seeddata/video/683859156.mp4",
  "https://s3-us-west-1.amazonaws.com/imaginarynumblr/seeddata/video/563399155.mp4",
  "https://s3-us-west-1.amazonaws.com/imaginarynumblr/seeddata/video/627977657.mp4",
  "https://s3-us-west-1.amazonaws.com/imaginarynumblr/seeddata/video/722783531.mp4",
  "https://s3-us-west-1.amazonaws.com/imaginarynumblr/seeddata/video/708989328.mp4",
  "https://s3-us-west-1.amazonaws.com/imaginarynumblr/seeddata/video/722777647.mp4",
  "https://s3-us-west-1.amazonaws.com/imaginarynumblr/seeddata/video/796794991.mp4",
  "https://s3-us-west-1.amazonaws.com/imaginarynumblr/seeddata/video/588729405.mp4",
  "https://s3-us-west-1.amazonaws.com/imaginarynumblr/seeddata/video/923430129.mp4",
  "https://s3-us-west-1.amazonaws.com/imaginarynumblr/seeddata/video/924796286.mp4",
  "https://s3-us-west-1.amazonaws.com/imaginarynumblr/seeddata/video/924782906.mp4",
  "https://s3-us-west-1.amazonaws.com/imaginarynumblr/seeddata/video/840331843.mp4",
  "https://s3-us-west-1.amazonaws.com/imaginarynumblr/seeddata/video/687898845.mp4",
  "https://s3-us-west-1.amazonaws.com/imaginarynumblr/seeddata/video/748298640.mp4",
  "https://s3-us-west-1.amazonaws.com/imaginarynumblr/seeddata/video/722779149.mp4",
  "https://s3-us-west-1.amazonaws.com/imaginarynumblr/seeddata/video/563400030.mp4",
  "https://s3-us-west-1.amazonaws.com/imaginarynumblr/seeddata/video/683858468.mp4",
  "https://s3-us-west-1.amazonaws.com/imaginarynumblr/seeddata/video/796814664.mp4",
  "https://s3-us-west-1.amazonaws.com/imaginarynumblr/seeddata/video/862014569.mp4",
  "https://s3-us-west-1.amazonaws.com/imaginarynumblr/seeddata/video/674128009.mp4",
  "https://s3-us-west-1.amazonaws.com/imaginarynumblr/seeddata/video/923490929.mp4",
  "https://s3-us-west-1.amazonaws.com/imaginarynumblr/seeddata/video/583335745.mp4",
  "https://s3-us-west-1.amazonaws.com/imaginarynumblr/seeddata/video/722741424.mp4",
  "https://s3-us-west-1.amazonaws.com/imaginarynumblr/seeddata/video/563399566.mp4",
  "https://s3-us-west-1.amazonaws.com/imaginarynumblr/seeddata/video/588737562.mp4",
  "https://s3-us-west-1.amazonaws.com/imaginarynumblr/seeddata/video/796795744.mp4",
  "https://s3-us-west-1.amazonaws.com/imaginarynumblr/seeddata/video/588745540.mp4",
  "https://s3-us-west-1.amazonaws.com/imaginarynumblr/seeddata/video/784501695.mp4",
  "https://s3-us-west-1.amazonaws.com/imaginarynumblr/seeddata/video/674118136.mp4",
  "https://s3-us-west-1.amazonaws.com/imaginarynumblr/seeddata/video/796795739.mp4",
  "https://s3-us-west-1.amazonaws.com/imaginarynumblr/seeddata/video/922050476.mp4",
  "https://s3-us-west-1.amazonaws.com/imaginarynumblr/seeddata/video/796795638.mp4",
  "https://s3-us-west-1.amazonaws.com/imaginarynumblr/seeddata/video/627965480.mp4",
  "https://s3-us-west-1.amazonaws.com/imaginarynumblr/seeddata/video/632325766.mp4",
  "https://s3-us-west-1.amazonaws.com/imaginarynumblr/seeddata/video/342125205.mp4",
  "https://s3-us-west-1.amazonaws.com/imaginarynumblr/seeddata/video/343488880.mp4",
  "https://s3-us-west-1.amazonaws.com/imaginarynumblr/seeddata/video/628513837.mp4",
  "https://s3-us-west-1.amazonaws.com/imaginarynumblr/seeddata/video/560156650.mp4",
  "https://s3-us-west-1.amazonaws.com/imaginarynumblr/seeddata/video/563399883.mp4",
  "https://s3-us-west-1.amazonaws.com/imaginarynumblr/seeddata/video/722740790.mp4",
  "https://s3-us-west-1.amazonaws.com/imaginarynumblr/seeddata/video/699572008.mp4",
  "https://s3-us-west-1.amazonaws.com/imaginarynumblr/seeddata/video/687898911.mp4",
  "https://s3-us-west-1.amazonaws.com/imaginarynumblr/seeddata/video/589734978.mp4",
  "https://s3-us-west-1.amazonaws.com/imaginarynumblr/seeddata/video/722729493.mp4",
  "https://s3-us-west-1.amazonaws.com/imaginarynumblr/seeddata/video/924779458.mp4",
  "https://s3-us-west-1.amazonaws.com/imaginarynumblr/seeddata/video/624054777.mp4",
  "https://s3-us-west-1.amazonaws.com/imaginarynumblr/seeddata/video/739124510.mp4"
]


User.create(
  username: 'username',
  password: 'password',
  email: 'demouser@demouser.demo.uk'
)
image_num = 0
100.times do
  User.create(
    username:Faker::Internet.user_name,
    password: 'password',
    email: Faker::Internet.safe_email,
    seed_image: seed_image_arr[image_num]
  )
  image_num += 1
end

# 1000 times (Content)
# Randomize user ID
# Randomize Content Type
  # 1 = quote
  # 2 = text
  # 3 = audio
  # 4 = photo
  # 5 = video
500.times do
  content_type = Random.rand(5) + 1
  seed_data = Random.rand(5) +1
  author = Random.rand(100) + 1

  case content_type
  when 1
    case seed_data
    when 1
      Blogpost.create(
        title: Faker::Book.title,
        quote: Faker::ChuckNorris.fact,
        content_type: 'quote',
        author_id: Random.rand(100) + 1,
        quote_source: Faker::LeagueOfLegends.champion
      )
    when 2
      Blogpost.create(
        title: Faker::LordOfTheRings.location,
        quote: Faker::FamilyGuy.quote,
        content_type: 'quote',
        author_id: Random.rand(100) + 1,
        quote_source: Faker::DrWho.character
      )
    when 3
      Blogpost.create(
        title: Faker::Book.genre,
        quote: Faker::BackToTheFuture.quote,
        content_type: 'quote',
        author_id: Random.rand(100) + 1,
        quote_source: Faker::Book.author
      )
    when 4
      Blogpost.create(
        title: Faker::FamilyGuy.character,
        quote: Faker::Movie.quote,
        content_type: 'quote',
        author_id: Random.rand(100) + 1,
        quote_source: Faker::HarryPotter.character
      )
    when 5
      Blogpost.create(
        title: Faker::BackToTheFuture.character,
        quote: Faker::LeagueOfLegends.quote,
        content_type: 'quote',
        author_id: Random.rand(100) + 1,
        quote_source: Faker::GameOfThrones.character
      )
    end
  when 2
    case seed_data
    when 1
      Blogpost.create(
        title: Faker::LordOfTheRings.location,
        description: Faker::Hacker.say_something_smart,
        content_type: 'text',
        author_id: Random.rand(100) + 1,
      )
    when 2
      Blogpost.create(
        title: Faker::Hacker.noun,
        description: Faker::LeagueOfLegends.quote,
        content_type: 'text',
        author_id: Random.rand(100) + 1,
      )
    when 3
      Blogpost.create(
        title: Faker::LeagueOfLegends.masteries,
        description: Faker::WorldOfWarcraft.quote,
        content_type: 'text',
        author_id: Random.rand(100) + 1,
      )
    when 4
      Blogpost.create(
        title: Faker::LeagueOfLegends.quote,
        description: Faker::Coffee.notes,
        content_type: 'text',
        author_id: Random.rand(100) + 1,
      )
    when 5
      Blogpost.create(
        title: Faker::DrWho.quote,
        description: Faker::LeagueOfLegends.quote,
        content_type: 'text',
        author_id: Random.rand(100) + 1,
      )
    end
  when 3
    case seed_data
    when 1
      Blogpost.create(
        title: Faker::LeagueOfLegends.masteries,
        description: Faker::SiliconValley.quote,
        content_type: 'audio',
        author_id: Random.rand(100) + 1,
        seed_content: seed_audio_arr[Random.rand(30)]
      )
    when 2
      Blogpost.create(
        title: Faker::Book.title,
        description: Faker::WorldOfWarcraft.quote,
        content_type: 'audio',
        author_id: Random.rand(100) + 1,
        seed_content: seed_audio_arr[Random.rand(30)]
      )
    when 3
      Blogpost.create(
        title: Faker::LeagueOfLegends.quote,
        description: Faker::SiliconValley.quote,
        content_type: 'audio',
        author_id: Random.rand(100) + 1,
        seed_content: seed_audio_arr[Random.rand(30)]
      )
    when 4
      Blogpost.create(
        title: Faker::Coffee.blend_name,
        description: Faker::StarWars.quote,
        content_type: 'audio',
        author_id: Random.rand(100) + 1,
        seed_content: seed_audio_arr[Random.rand(30)]
      )
    when 5
      Blogpost.create(
        title: Faker::Hacker.ingverb,
        description: Faker::Coffee.notes,
        content_type: 'audio',
        author_id: Random.rand(100) + 1,
        seed_content: seed_audio_arr[Random.rand(30)]
      )
    end
  when 4
    case seed_data
    when 1
      Blogpost.create(
        title: Faker::Book.title,
        description: Faker::StarWars.quote,
        content_type: 'photo',
        author_id: Random.rand(100) + 1,
        seed_content: seed_photo_arr[Random.rand(50)]
      )
    when 2
      Blogpost.create(
        title: Faker::Superhero.descriptor,
        description: Faker::WorldOfWarcraft.quote,
        content_type: 'photo',
        author_id: Random.rand(100) + 1,
        seed_content: seed_photo_arr[Random.rand(50)]
      )
    when 3
      Blogpost.create(
        title: Faker::LeagueOfLegends.quote,
        description: Faker::StarWars.wookiee_sentence,
        content_type: 'photo',
        author_id: Random.rand(100) + 1,
        seed_content: seed_photo_arr[Random.rand(50)]
      )
    when 4
      Blogpost.create(
        title: Faker::Hacker.noun,
        description: Faker::SiliconValley.quote,
        content_type: 'photo',
        author_id: Random.rand(100) + 1,
        seed_content: seed_photo_arr[Random.rand(50)]
      )
    when 5
      Blogpost.create(
        title: Faker::Book.title,
        description: Faker::StarWars.quote,
        content_type: 'photo',
        author_id: Random.rand(100) + 1,
        seed_content: seed_photo_arr[Random.rand(50)]
      )
    end
  when 5
    case seed_data
    when 1
      Blogpost.create(
        title: Faker::Coffee.blend_name,
        description: Faker::MostInterestingManInTheWorld.quote,
        content_type: 'video',
        author_id: Random.rand(100) + 1,
        seed_content: seed_video_arr[Random.rand(50)]
      )
    when 2
      Blogpost.create(
        title: Faker::Book.title,
        description: Faker::SiliconValley.motto,
        content_type: 'video',
        author_id: Random.rand(100) + 1,
        seed_content: seed_video_arr[Random.rand(50)]
      )
    when 3
      Blogpost.create(
        title: Faker::Superhero.descriptor,
        description: Faker::StarWars.wookiee_sentence,
        content_type: 'video',
        author_id: Random.rand(100) + 1,
        seed_content: seed_video_arr[Random.rand(50)]
      )
    when 4
      Blogpost.create(
        title: Faker::Coffee.notes,
        description: Faker::StarWars.quote,
        content_type: 'video',
        author_id: Random.rand(100) + 1,
        seed_content: seed_video_arr[Random.rand(50)]
      )
    when 5
      Blogpost.create(
        title: Faker::DrWho.quote,
        description: Faker::WorldOfWarcraft.quote,
        content_type: 'video',
        author_id: Random.rand(100) + 1,
        seed_content: seed_video_arr[Random.rand(50)]
      )
    end
  end

end

# 1000 times (Likes)
# Generate pairs of two numbers
# Push into an array if it's not in there
# Create Like
like_arr = []

2500.times do
  generated_arr = [Random.rand(100) + 1, Random.rand(500) + 1]
  while like_arr.include?(generated_arr)
    generated_arr = [Random.rand(100) + 1, Random.rand(500) + 1]
  end
  like_arr << generated_arr
end

like_arr.each do |arr|
  Like.create(
    liker_id: arr[0],
    liked_blog_id: arr[1]
  )
end

# 500 times (Follows)
  # Generate pairs of two numbers
  # Push into an array if it's not in there
  # Create Follow
follow_arr = []
1500.times do
  generated_arr = [Random.rand(100) + 1, Random.rand(100) + 1]
  while follow_arr.include?(generated_arr) && generated_arr[0] == generated_arr[1]
    generated_arr = [Random.rand(100) + 1, Random.rand(100) + 1]
  end
  follow_arr << generated_arr
end

follow_arr.each do |arr|
  Follow.create(
    follower_id: arr[0],
    followee_id: arr[1]
  )
end

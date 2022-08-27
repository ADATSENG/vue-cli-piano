<template lang="pug">
#app
  .audioplayer(v-for='item in soundData')
    audio(ref='audio', :data-num='item.number')
      source(:src='item.url', type='audio/ogg')

  .center_box
    h2 Vue.js Project
    .keyboard
      .pianokey(v-for='(i, key) in display_keys')
        .white(
          v-bind:class='get_current_hightlight(i.num, i.key) ? "playing" : ""',
          v-if='i.type === "white"',
          v-on:click='addSounds(i.num)'
        ) 
          .label {{ String.fromCharCode(i.key) }}
        .black(
          v-if='i.type === "black"',
          v-bind:class='get_current_hightlight(i.num) ? "playing" : ""',
          v-on:click='addSounds(i.num)'
        ) 
          .label {{ String.fromCharCode(i.key) }}
    br
    .controls
      ul.notes_list(v-if='notes.length > 0')
        li(
          v-for='(note, id) in notes',
          v-bind:class='now_note_id - 1 === id ? "playing" : ""'
        )
          .num {{ note.num }}
          .time {{ note.time }}
      button(v-on:click='loadSample') Sample
      button(v-on:click='playNext(1)') PlayNext
      button(v-if='playing_time <= 0', v-on:click='startPlay') StartPlay
        <font-awesome-icon :icon="['fas', 'play']"/>
      button(v-if='playing_time >= 1', v-on:click='stopPlay') StopPlay
        <font-awesome-icon :icon="['fas', 'pause']"/>
      button(v-if='record_time <= 0', v-on:click='startRecord') Record
        <font-awesome-icon :icon="['fas', 'circle']"/>
      button(v-if='record_time >= 1', v-on:click='stopRecord') StopRecord
        <font-awesome-icon :icon="['fas', 'stop']"/>
      button(v-on:click='notes = []') Clear
      h4 {{ playing_time + record_time }}
</template>

<script>
import { SOUNDPACK_INDEX, KEY_BOARDS, NOTES } from '@/enums/constant';
const soundPack = [];
const axios = require('axios');
export default {
  name: 'PainoContainer',
  props: {
    msg: String,
  },
  data() {
    return {
      soundData: soundPack,
      notes: NOTES,
      now_note_id: 0,
      playing_time: 0,
      next_note_id: 0,
      record_time: 0,
      player: null,
      recorder: null,
      display_keys: KEY_BOARDS,
      now_press_key: -1,
      audioObj: null,
    };
  },
  mounted() {
    for (let i = 0; i < SOUNDPACK_INDEX.length; i++) {
      soundPack.push({
        number: SOUNDPACK_INDEX[i],
        url:
          'https://awiclass.monoame.com/pianosound/set/' +
          SOUNDPACK_INDEX[i] +
          '.wav',
      });
    }
  },
  methods: {
    playSound(id, volume) {
      this.$nextTick(() => {
        if (this.$refs.audio) {
          let audioObj;
          const res = this.$refs.audio.filter((item) => {
            return Number(item.getAttribute('data-num')) === id;
          });
          audioObj = res[0];
          audioObj.volume = volume;
          audioObj.currentTime = 0;
          audioObj.play();
        }
      });
    },
    startRecord() {
      this.record_time = 0;
      this.recorder = setInterval(() => {
        this.record_time++;
      });
    },
    stopRecord() {
      clearInterval(this.recorder);
      this.record_time = 0;
    },
    get_current_hightlight(id, key) {
      if (this.now_press_key === key) return true;
      if (this.notes.length === 0) return false;
      let cur_id = this.now_note_id - 1;
      if (cur_id < 0) cur_id = 0;
      const num = this.notes[cur_id].num;
      if (num === id) return true;
    },
    addSounds(id) {
      if (this.record_time > 0) {
        this.notes.push({ num: id, time: this.record_time });
      }
      this.playSound(id, 1);
    },
    async loadSample() {
      try {
        const response = await axios.get(
          'http://awiclass.monoame.com/api/command.php?type=get&name=music_dodoro'
        );
        this.notes = response.data;
      } catch (error) {
        console.error(error);
      }
    },
    playNext(volume) {
      const { playSound } = this;
      const playNote = this.notes[this.now_note_id].num;

      playSound(playNote, volume);
      this.now_note_id += 1;
      if (this.now_note_id >= this.notes.length) {
        this.stopPlay();
      }
    },
    startPlay() {
      this.now_note_id = 0;
      this.playing_time = 0;
      this.next_note_id = 0;
      const vobj = this;
      this.player = setInterval(() => {
        if (vobj.playing_time >= vobj.notes[vobj.next_note_id].time) {
          vobj.playNext(1);
          vobj.next_note_id++;
        }
        vobj.playing_time++;
      }, 2);
    },
    stopPlay() {
      clearInterval(this.player);
      this.now_note_id = 0;
      this.playing_time = 0;
      this.next_note_id = 0;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
$key_width:44px
$key_height:300px

$color_white:#eee
$color_black:#585858

@mixin size($w,$h)
  width: $w
  height: $h
*
  vertical-align: top
  font-family: 微軟正黑體

html,body
  +size(100%,100%)
  margin: 0
  padding: 0

#app
  flex: 1

h2
  margin-bottom: 30px

button
  background-color: transparent
  border: solid 1px
  padding: 4px 12px
  border-radius: 4px
  transition: .5s
  cursor: pointer
  margin: 2px
  &:hover
    background-color: $color_black
    color: white

.notes_list
  li
    display: inline-block
    border-right: solid 1px
    padding: 2px 5px
    cursor: pointer
    transition: .3s

    &:hover
      background-color: darken($color_white,5)
    &.playing
      background-color: darken($color_white,10)
    .time
      font-size: 8px
      opacity: .3
    .num
      font-size: 16px

.center_box
  position: absolute
  left: 50%
  top: 50%
  transform: translate(-50%,-50%)
  text-align: center
  width: 100%

.keyboard
  box-shadow: 0px 0px 40px -5px rgba(0,0,0,.4)
  display: inline-block
  margin-bottom: 30px

.pianokey
  display: inline-block
  position: relative
  cursor: pointer

.black.playing
  background-color: lighten($color_black,10)
  transform: translate(0px,0px)

.white.playing
  background-color: darken($color_white,10)
  transform: translate(0px,0px)

.white
  +size($key_width,$key_height)
  border: solid 1px $color_white
  transform: translate(-3px,-3px)
  transition: .1s
  &:hover
    transform: translate(0px,0px)
    background-color: $color_white

.black
  position: absolute
  top: 0px
  width: $key_width/2
  height: $key_height*0.55
  background-color: $color_black
  margin-left: -$key_width/4
  margin-right: -$key_width/4
  z-index: 20
  transform: translate(-3px,-3px)
  transtion: .1s
  &:hover
    transform: translate(0px,0px)
    background-color: darken($color_black,10)
.label
  position: absolute
  color: rgba($color_black,0.5)
  bottom: -25px
  left: 50%
  transform: translate(-50%)
  font-size: 8px
svg
  margin-left: 5px
  margin-right: 0px
  margin-top: 3px
svg.fa-circle
  color: darken(red,10)
</style>

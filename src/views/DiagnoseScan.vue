<template>
    <div>
      <center>
        <br />
        <div class="tabs is-toggle is-fullwidth" style="width: 50%;">
          <ul>
            <li :class="{ 'is-active': activeTab === 'chat' }">
              <a @click="activeTab = 'chat'">
                <span class="icon is-small">
                  <i class="fas fa-image" aria-hidden="true"></i>
                </span>
                <span>Chat</span>
              </a>
            </li>
            <li :class="{ 'is-active': activeTab === 'image' }">
              <a @click="activeTab = 'image'">
                <span class="icon is-small">
                  <i class="fas fa-music" aria-hidden="true"></i>
                </span>
                <span>Image</span>
              </a>
            </li>
          </ul>
        </div>

        <div class="chat" v-if="activeTab === 'chat'">
            <ChatBot/>
        </div>
        <div class="image" v-else>
            
        </div>
      </center>
    </div>
  </template>

<script>
import ChatBot from '../components/ChatBot'
import { ref } from 'vue';
export default {
    components:{
        ChatBot
    },
    setup () {
        
        const activeTab = ref('chat');













        return { activeTab };

    },
}
</script>

<style lang="scss" scoped>


</style>
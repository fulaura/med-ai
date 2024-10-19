<template>
    <div style="width: 50%;">

        <div class="control" style="display: flex; justify-content: center;">
            <input class="input ai_inp is-rounded is-normal" ref="prompt_input" type="text" placeholder="Enter your request" style="width: 600px;">
            <p>‎ ‎ ‎ ‎ ‎ </p>
            <div class="button is-rounded is-normal is-outlined is-link" @click="chat()">Send</div>
        </div>

        <br>

        <article class="message is-dark">
            <div class="message-header">
                <p>Time</p>
                <button class="delete" aria-label="delete"></button>
            </div>
            <div class="message-body">
                <strong>Your request: </strong>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec
                nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus
                diam, et dictum <a>felis venenatis</a> efficitur. Aenean ac
                <em>eleifend lacus</em>, in mollis lectus. Donec sodales, arcu et
                sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a
                neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem.

                <br>

                <strong>Model's response: </strong>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec
                nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus
                diam, et dictum <a>felis venenatis</a> efficitur. Aenean ac
                <em>eleifend lacus</em>, in mollis lectus. Donec sodales, arcu et
                sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a
                neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem.
            </div>
        </article>


    </div>
</template>

<script>
import {ref} from 'vue';
export default {
    setup () {
        const prompt_input = ref('');
        
        const chat = async () => {
            const user_req = prompt_input.value.value

            if(user_req!=''){
                const ai_resp = await fetch(`http://localhost:3000/api/chat-req/${user_req}`);
                const res=await ai_resp.json()
                console.console.log(res);
                
            }

        }

        return {prompt_input, chat}
    },
    methods: {

    },
}
</script>

<style lang="scss" scoped>

</style>
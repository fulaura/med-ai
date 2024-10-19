<template>
    <div>
        <div class="body content">
            <div class="chatbot" style="padding-top: 10%;">
                <div class="field">
                    <label class="label" style="font-size: 3rem;"><strong>How can we help you?</strong></label>
                    <div class="control">
                      <input class="input  is-rounded is-medium" type="text" placeholder="Enter your request" style="width: 600px;">
                    </div>
                </div>

                <br>
                
                <div class="field is-grouped" style="justify-content: center;">
                    <div class="control">
                      <button class="button is-link is-rounded" @click="req_sender()">Submit</button>
                    </div>
                </div>

                <br>

                <div class="chat">



                </div>
            </div>
        </div> 
    </div>
</template>


<script>
import { ref } from 'vue';  // Import ref to create reactive variables

export default {
  setup() {
    const request = ref('');  // Reactive variable to store the input
    const response = ref('');  // Reactive variable to store the response

    const req_sender = async () => {
      try {
        const result = await fetch('http://localhost:3000/chat-req', {
          method: 'POST',  // Assuming you want to send data
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ request: request.value }),  // Send the request
        });

        if (!result.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await result.json();  // Assuming the server returns JSON
        response.value = data.message;  // Set response variable
      } catch (error) {
        console.error('Error sending request:', error);
        response.value = 'Error sending request';  // Handle error
      }
    };

    return { request, response, req_sender };
  },
};
</script>

<style lang="scss" scoped>

</style>
<template>
    <div>

        <nav class="navbar is-black" role="navigation" aria-label="main navigation">
        
      
        <div id="navbarBasicExample" class="navbar-menu">
          <div class="navbar-start">
            <a class="navbar-item" @click="goto('home')">Home</a>
            
            <!--<div class="navbar-item has-dropdown is-hoverable">
                <a class="navbar-link">Diagnose</a>
                <div class="navbar-dropdown">
                    <a class="navbar-item" href="./Diagnose/X_ray,.html">X-Ray</a>
                    <a class="navbar-item is-selected" href="./Diagnose/MRI.html">MRI</a>
                    <a class="navbar-item" href="./Diagnose/CT.html">CT</a>
                    <!--<hr class="navbar-divider">
                    <a class="navbar-item">Report an issue</a>
                </div>
            </div>-->

            <div class="navbar-item ">
                <a class="navbar-item " @click="goto('diagnose')">Diagnose</a>
            </div>

            <div class="navbar-item has-dropdown is-hoverable">
                <a class="navbar-link">Prophylactic</a>
                <div class="navbar-dropdown">
                    <a class="navbar-item" href="./Prophylactic/Plan.html">Create a plan</a>
                    <a class="navbar-item is-selected" href="./Prophylactic/Training.html">Training</a>
                    <!--<hr class="navbar-divider">
                    <a class="navbar-item">Report an issue</a>-->
                </div>
            </div>
            
            
            <div class="navbar-item has-dropdown is-hoverable">
                <a class="navbar-link">Support</a>
                <div class="navbar-dropdown">
                    <a class="navbar-item" href="./Support/Support.html">Support</a>
                    <a class="navbar-item is-selected" href="./Support/Alert.html">Alert</a>
                    <a class="navbar-item" href="./Support/Learn.html">Learn</a>
                </div>
                      <a class="navbar-item" href="./Settings.html">Settings</a>
            </div>
        </div>
        
          <div class="navbar-end">
            <div class="navbar-item">
              <div class="buttons">
                <a class="button is-active" @click="goto('registration')">
                  <strong>Sign up</strong>
                </a>
                <a class="button is-light">
                  Log in
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>

    </div>
</template>

<script>
import { useRouter } from 'vue-router'; 
export default {
    setup () {
        const router = useRouter();


        const goto = (route) => {
            router.push({ name: `${route}`});
        }
        

        return {
            goto
        }
    }
}
</script>

<style lang="scss" scoped>

</style>
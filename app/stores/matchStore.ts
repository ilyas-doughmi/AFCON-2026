import { defineStore } from "pinia";
import { ref } from "vue";

export const useMatchStore = defineStore('match',() => {
    const matches = ref([])

    async function fetchMatches() {
        const config = useRuntimeConfig()

        try{
            const data: any = await $fetch('https://v3.football.api-sports.io/fixtures?league=28&season=2025',{
                headers:{
                    'x-apisports-key': config.apiFootballKey
                }
            })
            matches.value = data.response || []
        }catch(error){
            console.error('problem happened:', error)
        }
    }

    return {matches,fetchMatches}
})
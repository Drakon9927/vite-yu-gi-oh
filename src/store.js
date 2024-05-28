import { reactive } from 'vue';
import axios from 'axios';

export const store = reactive({
    carte: [],

    fetchCarte() {
        axios.get('https://db.ygoprodeck.com/api/v7/cardinfo.php?num=10&offset=0')
            .then(response => {
                this.carte = response.data.data;
                console.log("Carte caricate:", this.carte);
            })
            .catch(error => {
                console.error('Error fetching cards:', error);
            });
    }
});
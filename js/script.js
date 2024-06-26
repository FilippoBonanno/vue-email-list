
    const { createApp } = Vue
    
    createApp({
    
        data() {
            return {
               email: [

               ],

               indirizzo: `https://flynn.boolean.careers/exercises/api/random/mail`,
               userInput: 0,
            }
        },
    

        methods: {
             getEmail() {

                const self = this;
                
                
                    axios.get(this.indirizzo).then(function(result) {
                        let datiRisposta = result.data.response;
                        console.log("Ricevuta risposta", datiRisposta);
            
                        // Ora 'this' fa ancora riferimento all'istanza corrente
                        self.email.push(datiRisposta);
                    });
                
            },

            stampa() {
                console.log("Dentro L'email c'è:", this.email);
                for (let i = 0; i < this.userInput; i++) {
                    this.getEmail();
                    
                };
                
            }

        },
        
        mounted() {
            
                
                
            
            
           
        }
    
    }).mount('#app');
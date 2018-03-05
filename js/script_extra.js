var fun_facts=["Mr D is actually a half-breed Maine Coon.",
               "A cat has been mayor of Talkeetna, Alaska, for 15 years. His name is Stubbs.",
                "Cats can't taste sweetness...Do not ever treat your cat with sweets!",
                "Mr D's birthday is 1st November.",
                "Cats use their whiskers to detect if they can fit through a space.",
                "Mr D's favourite food brand is Sheba."
                ];

function get_fact(){
  return fun_facts[Math.floor(Math.random() * (fun_facts.length))];
}

document.getElementById('fact').innerHTML = get_fact();
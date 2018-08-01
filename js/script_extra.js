var fun_facts=["Mr D is actually a half-breed Maine Coon.",
               "A cat has been mayor of Talkeetna, Alaska, for 15 years. His name is Stubbs.",
                "Cats can't taste sweetness...Do not ever treat your cat with sweets!",
                "Mr D's birthday is 1st November.",
                "Cats use their whiskers to detect if they can fit through a space.",
                "Mr D's favourite food brand is Sheba.",
                "A cat can’t climb head first down a tree because every claw on a cat’s paw points the same way. To get down from a tree, a cat must back down.",
                "There are more than 500 million domestic cats in the world, with approximately 40 recognized breeds.",
                "The group of words associated with cat (catt, cath, chat, katze) stem from the Latin catus, meaning domestic cat, as opposed to feles, or wild cat.",
                "A cat can travel at a top speed of approximately 31 mph (49 km) over a short distance."
                ];

function get_fact(){
  return fun_facts[Math.floor(Math.random() * (fun_facts.length))];
}

document.getElementById('fact').innerHTML = get_fact();
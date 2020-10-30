var nameList = [
  'Spicy','Shagedelic','Speedy','Super',
  'Flapping','Flying','Magnificent','Soaring','Immaculate','Hot',
  'Awesome','Amusing','Admirable','Shiny','Nimble','Red','Blue',
  'Green','Yellow','Gold','Holy','Heavenly','Caring','Courteous',
  'Sparkling','Juggling','Juggling','Impressive','Sprouting','Fighting','Skipping',
  'Deepest','Flailing','Jiggling','Jamming','Dancing','Suspending','Watchful',
  'Trusty','Electric','Flaming','Dripping','Hard','Luscious','Sturdy',
  'Voracious','Vehement','Fearless','Spiky','Clammy','Spiffy','Spizztastic',
  'Beefy','Spiny','Supreme','Radiating','Flashing','Gazing','Salty',
  'Sweet','Savory','Tangy','Squishy','Floppy','Overcooked','Colorful',
  'Jdded','Exceptionable','Unrelenting','AllNight','CrestFallen','Comforting','Trilingual','2D',
  'Alpha','Beta','Slimy','Shiny','Credible','Colossal','Enthusiastic','King',
  'Swagalicious','Queen','Slaying','Fiery','Biweekly','Annual','Superstitious','Littlestitious',
  'Cold','Chilly','Cool','Swaggy','Healthy','Zaney','Zigzaggy','Gangster',
  'Sandy','Windy','Jogging','Hurdling','Peeling','Chomping','Chewing','Big',
  'Small','Short','Tall','Sith','Milky','Creamy','Scorching','Bitter',
  'Ecstatic','Happy','Joy','Joyful','Excitable','Sqeuaky','Snoring','Honest',
  'Satisfying','Addicting','Comatose','CrashTested','Straightforward','WellBehaved','Clever','Shagadelic',
  'Undead','Elated','Creative','Cordial','Punctual','Combustible','Double','Triple','Slippery',
  'Melty','Cheesy','Peppery','Refreshing','Moist','Bubbly','HandMade',
  'Buzzing','Hopping','Prickly','Burning','Rubbing','Bubba','Bubble','Cooking','Smart','Extreme','Pasty','Stringy','Ultimate','Ultra','Smelly','Scented','Drippy','Dependable','Sipping','Headstrong','Rainbow','Shagadelic','Cool','Swag','Spicy','Shagedelic','Amazing','Spiffy'
]; 
var nameList2 = [
  'Lasanga','Soap','Shampoo','Volleyball',
  'Potato','Apple','Moose','Eraser','Paper','Pencil',
  'Dinosaur','Trapezoid','Circuitboard','NailClipper','Toenail','Mustache','Pear',
  'Watermelon','Mango','Potato','Banana','Pineapple','Jalapeno','Pickle',
  'Cheeto','Beefsteak','HotDog','Burger','Cheesestick','Wrapper','Corn',
  'Squirrel','Potato','Anaconda','Pig','Cow','Rhino','Spoon',
  'Fork','Piano','Banjo','Desk','Chair','Goatee','Mohawk',
  'Swordfish','Football','Basketball','JellyBean','BeanBag','Sofa','Couch',
  'Plate','Fridge','Tomato','Spider','Gorilla','Chimp','Bonobo',
  'Urchin','Seagull','Crow','Pigeon','Ostrich','Toast','Peanut',
  'Coconut','Pinecone','Almond','Pistachio','Cucumber','Zucchini','Mushroom','Pasta',
  'Ravioli','Spaghetti','Butter','Potato','SewingMachine','Jelly','Stapler','Keyboard',
  'Bacon','Bologna','Baloney','Lumberjack','Alpaca','Sidewalk','Cone','Sock',
  'Cap','Bunny','Umbrella','Sticker','Toaster','Sink','Bathtub','Cake',
  'Tank','Unicycle','Scooter','Telephone','Avocado','Blueberry','Strawberry','Blackberry',
  'Sponge','Squid','Grape','Cherry','Raspberry','Gummy','Chili','Biscuit',
  'KarateBelt','Shoelace','Spacebar','Wheel','Seatbelt','Mirror','YogaMat','Furnace',
  'Dirtblock','Seal','Bear','Panda','Headband','Scrunchie','Snowball','Eskimo',
  'Zombie','Mantis','Python','Beetle','Bee','Spider','Chameleon','Nostril','Eardrum',
  'Flute','Piccolo','Walrus','Elephant','Finch','Monkey','Battleship',
  'Stamp','Opposum','Cactus','Marmoset','Porcupine','Zebu','Mole','Ewe','Potato','Wombat','Capybara','Hamster','Peccary','Parakeet','Whale','Potato','Hippo','Mule','Sipping','Armadillio','Newt','Ibex','Potato','Gnu','Iguana','Gorilla','Potato','Potato'
]; 
function setFormMessage(formElement, type, message) {
    const messageElement = formElement.querySelector(".form__message");

    messageElement.textContent = message;
    messageElement.classList.remove("form__message--success", "form__message--error");
    messageElement.classList.add(`form__message--${type}`);
}
function setInputError(inputElement, message) {
    inputElement.classList.add("form__input--error");
    inputElement.parentElement.querySelector(".form__input-error-message").textContent = message;
}

function clearInputError(inputElement) {
    inputElement.classList.remove("form__input--error");
    inputElement.parentElement.querySelector(".form__input-error-message").textContent = "";
}
var finalName = ""
function randName(){
    finalName = nameList[Math.floor( Math.random() * nameList.length )];
    if ( Math.random() > 0.5 ) {
    finalName += nameList[Math.floor( Math.random() * nameList.length )];
}
  finalName += nameList2[Math.floor( Math.random() * nameList.length )];
    return finalName;
};
document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector("#login");
    const createAccountForm = document.querySelector("#createAccount");
    const usernameButton = document.querySelector("#Username");
    var stest, success = 1,successid;
    var dictionary = {},user;
    
    document.querySelector("#Username").addEventListener("click", e => {
        e.preventDefault();
        document.getElementById("randgen").style.fontFamily = "Lato,sans-serif";
        user = randName();
        document.getElementById("randgen").innerHTML = user;
    });
    document.querySelector("#linkCreateAccount").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.add("form--hidden");
        createAccountForm.classList.remove("form--hidden");
    });
    document.querySelector("#linkForgot").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.add("form--hidden");
        createAccountForm.classList.remove("form--hidden");
        setFormMessage(createAccountForm, "success", "We have reset your account");
        setTimeout(function(){
            setFormMessage(createAccountForm,"success","");
        },3000);
    });

    document.querySelector("#linkLogin").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.remove("form--hidden");
        createAccountForm.classList.add("form--hidden");
    });
    document.querySelector("#create").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.remove("form--hidden");
        createAccountForm.classList.add("form--hidden");
        setFormMessage(loginForm, "success", "Success! Account created");
        setTimeout(function(){
            setFormMessage(loginForm,"success","");
        },3000);
        dictionary[user] = stest;
    });
    loginForm.addEventListener("submit", e => {
        e.preventDefault();
        if (success != 1){
            setFormMessage(loginForm, "error", "Invalid username/password combination");
        }
        else{
            window.location.replace("./live.html")
        }
    });
    document.querySelectorAll(".form__input").forEach(inputElement => {
        inputElement.addEventListener("blur", e => {    
            if (e.target.id === "signupPassword"){
                if (e.target.value.length > 0 && e.target.value.length < 6){
                    setInputError(inputElement, "Password must be at least 6 characters in length");
                }
                else if (!e.target.value.includes("1") && !e.target.value.includes("2")&& !e.target.value.includes("3")&& !e.target.value.includes("4")&& !e.target.value.includes("5")&& !e.target.value.includes("6")&& !e.target.value.includes("7")&& !e.target.value.includes("8")&& !e.target.value.includes("9")&& !e.target.value.includes("0")){
                    setInputError(inputElement, "Password must contain at least 1 number");                    
                }
            else{
                stest = e.target.value;
            }
            }
            else if (e.target.id === "confirmPassword" && e.target.value.length > 0) {
                if (!e.target.value.includes(stest)){
                    setInputError(inputElement, "Passwords do not match");
                }
            }
            if (e.target.id === "subID"  && e.target.value.length > 0){
                successid = e.target.value;
            }
            else if (e.target.id === "subPassword" && e.target.value.length > 0){
                if (dictionary[successid] == e.target.value){
                    success=1;
                }
                else{success=0}
            }
        });
        inputElement.addEventListener("input", e => {
            clearInputError(inputElement);
        });
    });
});
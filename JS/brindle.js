function myFunction() {
    var inputText = document.getElementById("input").value; 
    var outputText = "";
    var counter = 0;

	while(counter < inputText.length){
        switch (inputText[counter]) {
            // Spaces
            case ' ':
                outputText = outputText.concat(" ");
                break;
            case '\t':
                outputText = outputText.concat("\t");
                break;
            case '\n':
                outputText = outputText.concat("\n"); 
                break;
            case '\v':
                outputText = outputText.concat("\v");
                break;
            case '\f':
                outputText = outputText.concat("\f");
                break;
            case '\r':
                outputText = outputText.concat("\r");
                break;

                // Letters
            case 'a':
            case 'A': {
                outputText = outputText.concat("⠁");
                break;
            }
            case 'b':
            case 'B': {
                outputText = outputText.concat("⠃");
                break;
            }
            case 'c':
            case 'C': {
                outputText = outputText.concat("⠉");
                break;
            }
            case 'd':
            case 'D': {
                outputText = outputText.concat("⠙");
                break;
            }
            case 'e':
            case 'E': {
                outputText = outputText.concat("⠑");
                break;
            }
            case 'f':
            case 'F': {
                outputText = outputText.concat("⠋");
                break;
            }
            case 'g':
            case 'G': {
                outputText = outputText.concat("⠛");
                break;
            }
            case 'h':
            case 'H': {
                outputText = outputText.concat("⠓");
                break;
            }
            case 'i':
            case 'I': {
                outputText = outputText.concat("⠊");
                break;
            }
            case 'j':
            case 'J': {
                outputText = outputText.concat("⠚");
                break;
            }
            case 'k':
            case 'K': {
                outputText = outputText.concat("⠅");
                break;
            }
            case 'l':
            case 'L': {
                outputText = outputText.concat("⠇");
                break;
            }
            case 'm':
            case 'M': {
                outputText = outputText.concat("⠍");
                break;
            }
            case 'n':
            case 'N': {
                outputText = outputText.concat("⠝");
                break;
            }
            case 'o':
            case 'O': {
                outputText = outputText.concat("⠕");
                break;
            }
            case 'p':
            case 'P': {
                outputText = outputText.concat("⠏");
                break;
            }
            case 'q':
            case 'Q': {
                outputText = outputText.concat("⠟");
                break;
            }
            case 'r':
            case 'R': {
                outputText = outputText.concat("⠗");
                break;
            }
            case 's':
            case 'S': {
                outputText = outputText.concat("⠎");
                break;
            }
            case 't':
            case 'T': {
                outputText = outputText.concat("⠞");
                break;
            }
            case 'u':
            case 'U': {
                outputText = outputText.concat("⠥");
                break;
            }
            case 'v':
            case 'V': {
                outputText = outputText.concat("⠧");
                break;
            }
            case 'w':
            case 'W': {
                outputText = outputText.concat("⠺");
                break;
            }
            case 'x':
            case 'X': {
                outputText = outputText.concat("⠭");
                break;
            }
            case 'y':
            case 'Y': {
                outputText = outputText.concat("⠽");
                break;
            }
            case 'z':
            case 'Z': {
                outputText = outputText.concat("⠵");
                break;
            }

            // Numbers
            case '0':
                outputText = outputText.concat("⠼⠚");
                break;
            case '1':
                outputText = outputText.concat("⠼⠁");
                break;
            case '2':
                outputText = outputText.concat("⠼⠃");
                break;
            case '3':
                outputText = outputText.concat("⠼⠉");
                break;
            case '4':
                outputText = outputText.concat("⠼⠙");
                break;
            case '5':
                outputText = outputText.concat("⠼⠑");
                break;
            case '6':
                outputText = outputText.concat("⠼⠋");
                break;
            case '7':
                outputText = outputText.concat("⠼⠛");
                break;
            case '8':
                outputText = outputText.concat("⠼⠓");
                break;
            case '9':
                outputText = outputText.concat("⠼⠊");
                break;

            // Symbols
            case '.':
                outputText = outputText.concat("⠲");
                break;
            case '-':
                outputText = outputText.concat("⠤");
                break;
            case ';':
                outputText = outputText.concat("⠆");
                break;
            case '\"':
                outputText = outputText.concat("⠄⠶");
                break;
            case '!':
                outputText = outputText.concat("⠖");
                break;
            case '(':
                outputText = outputText.concat("⠐⠣");
                break;
            case ')':
                outputText = outputText.concat("⠐⠜");
                break;
            case ',':
                outputText = outputText.concat("⠂");
                break;
            case '@':
                outputText = outputText.concat("⠜");
                break;
            case '*':
                outputText = outputText.concat("⠔");
                break;
            case '?':
                outputText = outputText.concat("⠦");
                break;
            default:
                outputText = outputText.concat("This character is not yet registered on the system");
            
        }       
        counter++;
     }

    document.getElementById("output").innerHTML = outputText;
}
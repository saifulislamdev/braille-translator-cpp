#include <iostream>

using namespace std;

int main() {
    string output;
    char character;
    while (cin >> character) {
        switch (character) {
            // Letters
            case 'a':
            case 'A': {
                output += "⠁";
                break;
            }
            case 'b':
            case 'B': {
                output += "⠃";
                break;
            }
            case 'c':
            case 'C': {
                output += "⠉";
                break;
            }
            case 'd':
            case 'D': {
                output += "⠙";
                break;
            }
            case 'e':
            case 'E': {
                output += "⠑";
                break;
            }
            case 'f':
            case 'F': {
                output += "⠋";
                break;
            }
            case 'g':
            case 'G': {
                output += "⠛";
                break;
            }
            case 'h':
            case 'H': {
                output += "⠓";
                break;
            }
            case 'i':
            case 'I': {
                output += "⠊";
                break;
            }
            case 'j':
            case 'J': {
                output += "⠚";
                break;
            }
            case 'k':
            case 'K': {
                output += "⠅";
                break;
            }
            case 'l':
            case 'L': {
                output += "⠇";
                break;
            }
            case 'm':
            case 'M': {
                output += "⠍";
                break;
            }
            case 'n':
            case 'N': {
                output += "⠝";
                break;
            }
            case 'o':
            case 'O': {
                output += "⠕";
                break;
            }
            case 'p':
            case 'P': {
                output += "⠏";
                break;
            }
            case 'q':
            case 'Q': {
                output += "⠟";
                break;
            }
            case 'r':
            case 'R': {
                output += "⠗";
                break;
            }
            case 's':
            case 'S': {
                output += "⠎";
                break;
            }
            case 't':
            case 'T': {
                output += "⠞";
                break;
            }
            case 'u':
            case 'U': {
                output += "⠥";
                break;
            }
            case 'v':
            case 'V': {
                output += "⠧";
                break;
            }
            case 'w':
            case 'W': {
                output += "⠺";
                break;
            }
            case 'x':
            case 'X': {
                output += "⠭";
                break;
            }
            case 'y':
            case 'Y': {
                output += "⠽";
                break;
            }
            case 'z':
            case 'Z': {
                output += "⠵";
                break;
            }

                // Numbers
            case '0':
                output += "⠼⠚";
                break;
            case '1':
                output += "⠼⠁";
                break;
            case '2':
                output += "⠼⠃";
                break;
            case '3':
                output += "⠼⠉";
                break;
            case '4':
                output += "⠼⠙";
                break;
            case '5':
                output += "⠼⠑";
                break;
            case '6':
                output += "⠼⠋";
                break;
            case '7':
                output += "⠼⠛";
                break;
            case '8':
                output += "⠼⠓";
                break;
            case '9':
                output += "⠼⠊";
                break;

                // Symbols
            case '\'':
                output += "⠄";
                break;
//            case '‘':
//                output += "⠄⠦";
//                break;
//            case '’':
//                output += "⠄⠴";
//                break;
            case '.':
                output += "⠲";
                break;
            case '-':
                output += "⠐⠤";
                break;
//            case '–':
//                output += "⠠⠤";
//                break;
//            case '—':
//                output += "⠐⠠⠤";
//                break;
            case '=':
                output += "⠐⠶";
                break;
            case '+':
                output += "⠐⠖";
                break;
//            case '×':
//                output += "⠐⠐⠦";
//                break;
//            case '÷':
//                output += "⠐⠌";
//                break;
            case ';':
                output += "⠆";
                break;
            case ':':
                output += "⠒";
                break;
            case '\"':
                output += "⠄⠶";
                break;
//            case '“':
//                output += "⠘⠦";
//                break;
//            case '”':
//                output += "⠘⠴";
//                break;
            case ',':
                output += "⠂";
                break;
            case '?':
                output += "⠦";
                break;
            case '!':
                output += "⠖";
                break;
            case '@':
                output += "⠈⠁";
                break;
            case '#':
                output += "⠼";
                break;
            case '&':
                output += "⠈⠯";
                break;
            case '*':
                output += "⠔";
                break;
            case '(':
                output += "⠐⠣";
                break;
            case ')':
                output += "⠐⠜";
                break;
//            case "©":
//                output += "⠘⠉";
//                break;
//            case "®":
//                output += "⠘⠗";
//                break;
//            case "™":
//                output += "⠘⠞";
//                break;
//            case "°":
//                output += "⠘⠚";
//                break;
            case '%':
                output += "⠨⠴";
                break;
            default:
                output += character;
                break;
        }
    }
    cout << output << endl;
    return EXIT_SUCCESS;
}
## Bash Quick Start Guide
---

# Chapter 1
- Bash (GNU Bourne Again Shell) -  a Bourne-style shell, with some support for POSIX shell compatibility
- Bash as the software distribution and the programming language.
- bash as its interpreter program
	
show path to Bash:
```
declare -p BASH
```
		
- show the Bash verison:
```
declare -p BASH_VERSION
```
		
- display bash shells:
```
cat /etc/shells
```
		
### POSIX shell script features:
- Running commands convenient syntax for running commands, including other programs, specifying arguments, environment variables, working directories, permissions masking, and other properties.
- Variables that can be set to any string value, including manipulating process environment variables, and that can be expanded on the command line.
- Arithmetic expansion for performing integer-based arithmetic on variables and numbers.
- Control structures for executing code depending on the outcome of another command (if), including a specially-designed test or [ command, and repeating code until a condition is true (while).
- Aliases as a way to abbreviate long command lines as a single word for convenience.
- Functions to allow defining blocks of code as new commands for the purposes of the running script or interactive session.
- Input and output redirection to specify input sources and output destinations for programs run in the shell.
- Pipes to direct the output of one command to become the input of another.
- Argument list through which code can iterate using a for loop.
- Parameter expansion a means of switching between or transforming string values in assignments or command arguments.
- Pattern matching in the form of classic Unix globs.
- Process management in running jobs in the background, and waiting for them to complete at the desired point.
- Compound commands to treat a group of commands as one, optionally running it in a subshell environment (subprocess).
- Reading lines of input data including breaking them down into fields with a defined separator character.
- Formatted strings such as the C printf(3) function in the stdio C programming language library.
- Command substitution to use the output of a command as a variable, as part of a test, or as an argument to another command.
		
###	Bash-specific features
- Named array variables.
- An easier syntax for performing conditional tests.
- Extended globs for advanced pattern-matching.
- Regular expression support, for performing the most powerful kind of text-pattern-matching, when even globs won't do.
- Local variables for functions, a limited kind of variable scope.
- A C-style for loop syntax.
- Several kinds of parameter expansion, including case transformation, array slices, substrings, substitution, and quoting.
- Arithmetic expressions, for conveniently testing the outcome of arithmetic operations.
- Many more shell options to control shell script and interactive shell behavior, including extra debugging support.
- Better support for irregular filenames and unusual line separators in data.
		
###	When to apply Bash:
- Prototyping
- Interactive system administration
- Automation
- Connecting programs together
- Filtering and transforming text input
- Navigating the Unix filesystem
- Basic pattern-matching on strings
- Portability
		
###	When to avoid Bash:
- Programs requiring speed
- Fixed or floating-point math
- Long or complex programs
- Serialization
- Network programming
- Object-oriented programming
- Functional programming
- Concurrent programming
		

# Chapter 2
- Shell metacharacters - characters that have a different meaning to Bash:
```
| (pipe)
& (ampersand)
; (semicolon)
, ( and )
(parentheses),
< and > (angle brackets).
[  (in some contexts)
*  (in some contexts)
$  (in some contexts)
```
		
- Quoting is way to include special characters, except for null.  (The is no way to escape null character (ASCII NUL, 0x00) in a shell word.)
- Escape characters with backslashes except you can't escape a newline within a word.  You need to escap backticks (`).
- Single Quotes can escape a newline character. To escape a single quote \'''. Exclamation marks need to be in single quotes.
- Double quotes perform certain kinds of expansion.
- Run commands in sequence by separating them with semicolons (;).
- Run commands in sequence by separating them with semicolons (&&) to have them stop on error.
- Exit values can be accessed by the $ parameter. Returns true on success, false on fail and status of 127  of not a command.
- To run a command in the background add an ampersand ( &) at the end.
	
# Chapter 3
- Command types:
    - Shell builtin commands - Implemented in the bash binary itself. (Examples: echo, type and source)
    - Runtime commands - Defined in the shell at runtime. Written in the Bash language. Can be aliases or functions. 
    - System commands - Invoke executable program files on your filesystem.  (Examples: grep, ping and rm)
		
### Runtime Commands (written in Bash language):
```
type:    Finding what a command is
echo:    Printing arguments
printf:  Printing formatted arguments
pwd:     Printing the current directory
cd:      Changing the current directory
set:     Viewing and setting shell properties
declare: Managing variables and functions
test, [, [[:   Evaluating expressions
```

### System Commands (Not part of Bash):
```
ls:      Listing files for users
mv:      Moving and renaming files
cp:      Copying files
rm:      Deleting files
rmdir:   Deleting directories
grep:    Matching patterns
cut:     Extracting columns from data
wc:      Counting lines, words, and characters
find:    Iterating through a file tree
sort:    Sorting input
sort:    De-duplicating input
```

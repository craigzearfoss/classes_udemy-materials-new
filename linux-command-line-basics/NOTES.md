# Linux Command Line Basics

- Udemy
- Instructor: Ahmed Alkabary
- Completed Mar 10, 2019

---
## Most popular Linux distributions
- Mint
- Debian
- Ubuntu
- openSUSE
- Fedora
- Mageia
- CentOS
- Manjaro
- LXLE
-Arch


## directory tree
```
/
/bin    - (binary) contains executables, programs and commands that can be by all users of the system
/sbin   - contains commands that perform vital system tasks (network management, disk partitioning) (only superuser access)
/etc    - contains configuration files
/opt    - (optional) contains commercial software that is not installed by default on your system
/home   - each user is given a directory under the home directory, ex. /home/david and /home/john.
/tmp    - (temporary) contains temporary files, that is files that are often changed or deleted
/var    - (variable data) contains variable data that frequently changes over time, such as log files, mail spools and user databases
.       - the current directory
..      - the parent directory
```

## absolute vs. relative paths
- absolute path starts with the root directory
- relative path starts with the current directory
	
## inode (index node)
- Every file in the systne has an inode.
- Contains all file information except the file contents and name
- Just like a personal ID or a passport (without a name!)
- It contains the following:
    - inode number
    - file size
    - owner information
    - permissions
    - file type
    - number of links
    - etc.
		
## soft links vs hard links
- soft link (also known as a symbolic link)
    - It is a pointer to the original file.
    - Just like a shortcut in Windows.
    - Different inode number.
    - Smaller file size.
    - If we delete the original file then the soft links will become useless
    - You can create a soft link for a directory.
		
## hard link
- Different name for the same file.
- Same fie size.
- Same inode number.
- If you delete the original file the hard inks will still contain the data that was in the original file.  (Kind of like a copy of  a file)
- You cannot create a hard link for a directory.
	
#### If any file begins with one dot then it is hidden.	

#### Extension of a file in Linux has no meaning.
	
#### Special characters in file names include: $ > < & | ; " ' \
#### You can not include a forward slash or  the null character in a file name.
````
Ctrl-L  - clear the screen
Ctrl-A  - go to the beginning of a line
Ctrl-E  - go to the end of a line
Ctri-D  - delete a single character
Ctrl-F  - go forward one character
Ctrl-B  - go backward one character
Alt-F   - go forward one word at a time
Alt-B   - go backward one word at a time   
Alt-L   - make work lower case
Alt-U   - make word upper case

Ctrl-K	- cut all of the text to the end of the line
Ctrl-U	- cut all of the text in the other direction
Ctrl-Y	- paste the text
````

## Editors
```
gedit   - the default graphical text editor for the Gnome desktop
nano    - command line editor
less    - let's you view text files, but not edit them. Some shortcuts are:
              [down arrow]  - go down one line
              [up arrow]    - go up one line
              [space bar]   - go down one page
                b           - go back one page
                G           - go to end of file
                g           - go to the be
              /qwerty       - use forward slash to search for a term; use 'n' to search for the next occurrence
              qwerty        - quit
```

## Command History
- By default most Linux ditributions will remember the last 500 commands.
- To show the history of commands that you enter use the 'history' command.
- To execute a command in your history enter an exclamation mark followed by the number in the command history. For example.
      - !299
		
## Categories of Linux Commads
- executable programs
    - these can be found in the /bin or /usr/bin or /sbin directories. 
- shell builtins
    - example - cp, type, cat, date  (not regarded as executable)
- shell scripts
    - files that contain code (they can also be in the /bin or /usr/bin or /sbin directories, but also other locations)
- alias
    - a command that you can define yourself that is usually built from other commands; example - ls

#### type - use this command to determine a command type

#### Combine commands by using semicolons or double ampersands. (The double ampersands will short circuit the evaluation if one of the commands fails.)

## Wildcards
```
cp [abc]* dir1         - copy all files that begin with an a, b or c to dir1
cp ![abc]* dir1        - copy all files that do not begin with an a, b or c to dir1
cp [0-9]* dir1         - copy all files that begin with a digit to dir1
cp [[:upper:]]* dir1   - copy all files that begin with an upper case character to dir1
cp [[:lower:]]* dir1   - copy all files that begin with an lower case character to dir1
cp *[[:digit:]] dir1   - copy all files that end with a digit to dir1
cp [[:alpha:]]* dir1   - copy all files that begin with an alphabetic character to dir1
cp [![:alpha:]]* dir1  - copy all files that do not begin with an alphabetic character to dir1
cp [[:alnum:]]* dir1   - copy all files that begin with an alphanumericc character to dir1
```

## Aliases
- First test if the command already exists by using the 'type' command.  
- An example:
```
alias del="rm -i"
```

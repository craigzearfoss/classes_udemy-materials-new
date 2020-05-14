import tkinter as tk

# class constructor for the window object
window = tk.Tk()

# create a text box object
text_box = tk.Entry(window)

def SaveText():
    str1 = text_box.get()
    fx = open("file1", "w");
    fx.write(str1)
    fx.close()

# create a button object
btn1 = tk.Button(window, text="Save", command=SaveText)

# place the object on the window
text_box.pack()
btn1.pack()

# main loop
window.mainloop();


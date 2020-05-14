file_object = open("file1.txt", "r")
phrase = file_object.read()
file_object.close()
print(phrase)
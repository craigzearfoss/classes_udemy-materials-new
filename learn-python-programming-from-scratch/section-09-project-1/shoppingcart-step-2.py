from random import randint

class ShoppingCart:
    def __init__(self):
        self.items = []
    def addtocart(self,item):
        self.items.append(item)
    def removefromcart(self,itemindex):
        self.items.pop(itemindex)
    def pricecart(self):
        price = 0
        for x in self.items:
            price = price+x.price
        return price
    def listcart(self):
        cid = 0
        print("Cart Items")
        for x in self.items:
            print(x.name, x.price, cid)
            cid = cid+1
        print("")

class Item:
    def __init__(self,price,name):
        self.price = price
        self.name = name

store = []
itemNames = ["HDMI Cable", "Keyboard", "Headphones", "RAM"]

def makeStoreItems(amt):
    storeitems = 0
    while storeitems <= amt:
        nItem = Item(randint(1, 50), itemNames[randint(0, len(itemNames)-1)])
        store.append(nItem)
        storeitems = storeitems+1

def CreateStore(storefile):
    try:
        fx = open(storefile, "r")
        str1 = ""
        str1 = fx.read()
    except IOError:
        print("No Existing Store... generating items")
        makeStoreItems(4)


def liststore():
    iid = 0
    for x in store:
        print("iid", x.price, x.name)
        iid = iid+1



makeStoreItems(4)
liststore()
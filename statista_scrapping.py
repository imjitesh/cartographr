from lxml import html
import requests, pickle
from textblob.classifiers import DecisionTreeClassifier

def scrap(page_num,category,label):
    with open('E:\Cartographr\cartographr.pickle', 'rb') as handle:
        cl = pickle.load(handle)
    itemList = []
    for i in range(1,page_num+1):
        static_link = "https://www.statista.com/search/?statistics=1&interval=0&category="+str(category)+"&subCategory=0&region=1714&archive=1&q=india+&sortMethod=idrelevance&accuracy=and&subCategory=0&p="+str(i)
        page = requests.get(static_link)
        tree = html.fromstring(page.content.replace("<span>","").replace("</span>",""))
        item = tree.xpath('//a[@class="resultItem"]/text()')
        itemList.extend(item)
    for i in itemList:
        itemList[itemList.index(i)] = (i,label)
    cl.update(itemList)
    with open('E:\Cartographr\cartographr.pickle', 'wb') as handle:
        pickle.dump(cl, handle, protocol=pickle.HIGHEST_PROTOCOL)

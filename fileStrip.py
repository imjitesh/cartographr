def fileStrip(fname):
    with open(fname,"r") as f:
    content = f.read()
    content = content.replace("\t","")
    content = content.replace("\n","")
    with open(fname,"w") as f:
        f.write(content)

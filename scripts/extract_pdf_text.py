from PyPDF2 import PdfReader
p='D:/Non-Academics/portfolio/YashuMe/public/certificates/Software_Core.pdf'
reader=PdfReader(p)
text=[]
for i,page in enumerate(reader.pages):
    t=page.extract_text()
    if t:
        text.append(t)
full='\n\n---PAGE---\n\n'.join(text)
print(full)

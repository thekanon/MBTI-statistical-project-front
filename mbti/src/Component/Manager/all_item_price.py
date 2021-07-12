from selenium import webdriver
import time

chromedriver = "C:\chromeweb\chromedriver.exe"
driver = webdriver.Chrome(chromedriver)

driver.get('https://namu.wiki/w/RM')

print("+" * 100)
print(driver.title)
print(driver.current_url)
print("바이크 브랜드 크롤링")
print("-" * 100)

time.sleep(2)

# 바이크 제조사 1번 페이지 진입해서 바이크 리스트 추출
allBikeCompanyElement = driver.find_elements_by_css_selector(
    "div.wiki-table-wrap.table-right")

# 바이크 첫 페이지 크롤링
for item in allBikeCompanyElement:

    for itemSub in item.find_elements_by_css_selector('tr'):
        for lastItem in itemSub.find_elements_by_css_selector("td > div"):
            print(lastItem.text)
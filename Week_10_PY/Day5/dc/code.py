import requests
import time


def load_timer(url):
    try:
        start_time = time.time()
        requests.get(url)
        end_time = time.time()
        return end_time - start_time
    except requests.RequestException:
        return None


websites = 'https://www.google.com', 'https://www.imdb.com', 'https://edition.cnn.com'

for site in websites:
    load_time = load_timer(site)
    if load_time is not None:
        print(f'{site} load time is {load_time:.4f} s')
    else:
        print(f'Fail {site}')

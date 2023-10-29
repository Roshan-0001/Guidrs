import requests

def fetch_google_search_results(api_key, cx, query):
    url = f'https://www.googleapis.com/customsearch/v1?q={query}&key={api_key}&cx={cx}'
    response = requests.get(url)
    if response.status_code == 200:
        return response.json()
    else:
        raise Exception(f'Error fetching data. Status code: {response.status_code}')

# Replace 'YOUR_API_KEY' and 'YOUR_CX' with your actual API key and Custom Search Engine ID
api_key = '7cf1f1cbfb23d6945ed10635bc144515'
cx = '5432ad76083c94515'
query = input("Enter search query: ")

try:
    results = fetch_google_search_results(api_key, cx, query)
    for item in results['items']:
        print(f"Title: {item['title']}")
        print(f"Link: {item['link']}")
        print(f"Snippet: {item['snippet']}")
        print("\n")
except Exception as e:
    print(e)

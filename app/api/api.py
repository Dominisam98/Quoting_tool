import json
import pandas as pd
import requests


def get_price(airport):
    headers = {
        'accept': 'application/json',
        'x-api-key': 'FECCAD12-C47F-4A07-9F0B-21A977EE9C5C',
        'Content-Type': 'application/json',
    }

    json_data = {
        'username': 'Accounting@craftcharter.com',
        'password': 'hSMuCZA58#99',
    }

    response = requests.post('https://api.fuelerlinx.com/api/User/token', headers=headers, json=json_data)

    # this line takes the response text and just grabs the bearer token needed to authenticate
    token_string = str(json.loads(str(response.text))["token"])[4:]
    print(token_string)

    headers2 = {
        'accept': 'application/json',
        'Authorization': 'Bearer ' + token_string,
        'x-api-key': 'FECCAD12-C47F-4A07-9F0B-21A977EE9C5C',
    }

    response2 = requests.get('https://api.fuelerlinx.com/api/FuelPricing/current/' + airport, headers=headers2)
    response3 = json.loads(str(response2.text))["result"]
    # print(response3)

    if response3 == []:
        response_string = None
    else:
        response_string = json.loads(str(response2.text))["result"][0]["fuelPriceOptions"]

    df = pd.DataFrame(response_string)

    if response_string is None:
        fuel_price = None
    elif df.iat[0, 0] > 2:
        fuel_price = df.iat[0, 0]
    else:
        fuel_price = df.iat[df[df['price'].gt(2)].index[0], 0]
    return fuel_price

print(get_price('KVNY'))

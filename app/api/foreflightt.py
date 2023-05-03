import requests
import json
import pandas as pd


# this function gets a list of distinct aircraft types from our foreflight account
def get_aircraft_types():
    headers = {
        'accept': 'application/json',
        'x-vendorId': '936',
        'x-api-key': 'FJRNS8HJNkRwMX1b0cdRxFdyiXPBgce0pkIySmvqpOc=',
    }

    # this is the get request (api call) to retrieve aircraft types
    response = requests.get('https://public-api.foreflight.com/public/api/aircraft', headers=headers)
    response_string = json.loads(str(response.text))
    # make a dataframe called df that contains all aircraft types returned from the api
    df = pd.DataFrame(response_string)
    # make a unique list instead of a dataframe
    df = df.aircraftModelCode.unique().tolist()

    # returns a list of unique aircraft types
    return df


# this function gets all of our aircrafts from foreflight and returns the tails for a given aircraft type
def get_aircrafts(aircraft_type):
    headers = {
        'accept': 'application/json',
        'x-vendorId': '936',
        'x-api-key': 'FJRNS8HJNkRwMX1b0cdRxFdyiXPBgce0pkIySmvqpOc=',
        "Access-Control-Allow-Origin": "*",

    }

    # this is the get request (api call) to retrieve aircraft types
    response = requests.get('https://public-api.foreflight.com/public/api/aircraft', headers=headers)
    response_string = json.loads(str(response.text))
    # make a dataframe called df that contains all aircrafts (by tail number) returned from the api
    df = pd.DataFrame(response_string)
    df = df[df.aircraftModelCode == aircraft_type].aircraftRegistration

    # returns a dataframe with all of our tail numbers
    return df

# this function gets fuel burn based off of origin, dest, start date, and aircraft type
# it averages the fuel burn calculated in foreflight for all of our aircrafts of that type
def get_fuel_burn(origin, dest, datetime_zulu, aircraft_type):
    headers = {
        'accept': 'application/json',
        'x-vendorId': '934',
        'x-api-key': 'FJRNS8HJNkRwMX1b0cdRxFdyiXPBgce0pkIySmvqpOc=',
        'Content-Type': 'application/json-patch+json',
    }

    totalFuel = 0
    aircrafts = 0
    # loops through all of our tail numbers to get fuel burn for each
    for x in get_aircrafts(aircraft_type):
        data = '{ "flight": { "departure": "' + origin + '", "destination": "' + dest + '", "scheduledTimeOfDeparture": "' + datetime_zulu + '", "aircraftRegistration": "' + x + '" } }'
        response = requests.post('https://public-api.foreflight.com/public/api/flights/performance', headers=headers, data=data)
        totalFuel += json.loads(response.text)['performance'].get('fuel').get('flightFuel')
        aircrafts += 1
    avg_fuel_lbs = totalFuel / aircrafts
    return avg_fuel_lbs


# this function gets flight time based off of origin, dest, start date, and aircraft type
def get_flight_time(origin, dest, datetime_zulu, aircraft_type):
    headers = {
        'accept': 'application/json',
        'x-vendorId': '934',
        'x-api-key': 'FJRNS8HJNkRwMX1b0cdRxFdyiXPBgce0pkIySmvqpOc=',
        'Content-Type': 'application/json-patch+json',
    }

    flight_time = 0
    aircrafts = 0

    for x in get_aircrafts(aircraft_type):
        data = '{ "flight": { "departure": "' + origin + '", "destination": "' + dest + '", "scheduledTimeOfDeparture": "' + datetime_zulu + '", "aircraftRegistration": "' + x + '" } }'
        response = requests.post('https://public-api.foreflight.com/public/api/flights/performance', headers=headers,
                                 data=data)
        flight_time += json.loads(response.text)['performance'].get('times').get('timeToDestinationMinutes')
        aircrafts += 1

    avg_flight_time = flight_time / aircrafts
    return avg_flight_time

# print(get_flight_time('KTEB', 'KOPF', '2022-08-09T09:59:36.000Z', 'CL30'))
print(get_fuel_burn('KLAX', 'KOPF', '2022-08-09T11:11:10.000Z', 'GLF4'))
#print(get_aircrafts('GLF5'))
#print(get_aircraft_types())
print(get_flight_time('KMIA', 'KJFK', '2022-08-09T14:50:36.000Z', 'CL30'))

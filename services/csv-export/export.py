import csv
from io import StringIO

def generate_csv(data, headers):
    """
    Generates a CSV string from data and headers.
    
    :param data: List of dictionaries representing the data rows.
    :param headers: List of header names for the CSV.
    :return: A string containing the CSV data.
        
    """
    output = StringIO()
    writer = csv.DictWriter(output, fieldnames=headers)
    writer.writeheader()
    writer.writerows(data)
    return output.getvalue()
    
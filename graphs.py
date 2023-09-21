import matplotlib.pyplot as plt
import json

def generate_pie_chart(labels, values):
    plt.figure(figsize=(10, 6))
    plt.pie(values, labels=labels, autopct='%1.1f%%', startangle=90)
    plt.axis('equal')
    plt.title('Distribution of Week Data')
    plt.savefig('pie_chart.png')

if __name__ == "__main__":
    data = json.loads(input())

    labels = data['labels']
    values = data['values']

    generate_pie_chart(labels, values)

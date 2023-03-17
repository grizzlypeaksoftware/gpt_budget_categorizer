# AI Budget Categorizer

This is a Node.js Express API that uses the OpenAI API to generate a relevant budget category for a given transaction memo. The API accepts an array of budget categories and a transaction memo as input, and returns the relevant budget category as output. The API uses the GPT-3 language model from OpenAI to generate the relevant budget category.

You can read through my article about this here: [GPT-4 Meets Finance: Automate Transaction Categorization with Express API](https://www.grizzlypeaksoftware.com/articles?id=3ZBY4gcMsLB8JqCKLd5NwU)

## Prerequisites

- Node.js 12.18.3 or later
- OpenAI API key

## Getting Started

1. Clone this repository to your local machine.
2. Create a `.env` file in the root directory of the project and add your OpenAI API key as follows:

    OPENAI_API_KEY=your_api_key_here


3. Install the dependencies by running the following command:

    npm install


4. Start the server by running the following command:

    npm start


By default, the server will listen on port `3000`. You can change the port by setting the `PORT` environment variable.

## Usage

To use the API, send a `POST` request to the `/generate-budget-category` endpoint with a JSON object in the request body that contains an array of budget categories and a transaction memo. The API will generate the relevant budget category for the transaction memo using the GPT-3 language model from OpenAI and return it as a JSON object.

### Request

- `POST /categorize`

```json
{
 "categories": ["Utilities", "Income", "Rent", "Services", "Groceries", "Mortgage", "Payments", "Insurance", "Investing", "Transfers"],
 "memo": "ACH WITHDRAWAL CHASE CREDIT CRD TYPE: EPAY CO: CHASE CREDIT CRD NAME:   %% ACH Trace"
}
```

### Response

```json
{
  "category": "Payments"
}
```

### Example Memo Data

ACH WITHDRAWAL BK OF AMER VISA TYPE: ONLINE PMT CO: BK OF AMER VISA NAME: , %% ACH Trace 

ACH WITHDRAWAL CHASE CREDIT CRD TYPE: EPAY CO: CHASE CREDIT CRD NAME:  T  %% ACH Trace 

ACH WITHDRAWAL ENSTAR NGCO TYPE: UTILITIES DATA: 907-277-5551 CO: ENSTAR NGCO NAME:  T * %% ACH Trace 

ACH WITHDRAWAL GREENLIGHT TYPE: APP DATA: APP CO: GREENLIGHT NAME:   %% ACH Trace 

ACH WITHDRAWAL NSM DBAMR.COOPER TYPE: NSM DBAMR DATA: 888-480-2432 CO: NSM DBAMR.COOPER NAME:  * %% ACH Trace 

ACH WITHDRAWAL STATE FARM RO 27 TYPE: SFPP CO: STATE FARM RO 27 %% ACH Trace 

ACH WITHDRAWAL TD AMERITRADE TYPE: ACH IN CO: TD AMERITRADE NAME:   %% ACH Trace 

ACH WITHDRAWAL VERIZON WIRELESS TYPE: PAYMENTS CO: VERIZON WIRELESS %% ACH Trace 

ACH WITHDRAWAL WELLS FARGO CARD TYPE: CCPYMT CO: WELLS FARGO CARD NAME:   %% ACH Trace 

ACH WITHDRAWAL WF HOME MTG TYPE: AUTO PAY DATA: ACH CO: WF HOME MTG NAME:  T  %% ACH Trace 

DEBIT CARD WITHDRAWAL PURCHASE  NETFLIX COM LOS GATOS CA Date 02/11/23 PURCH  %% Card 15 #6020 

DEBIT CARD WITHDRAWAL PURCHASE CHUGACHELECTRICWEBRECR 907-563-7366 AK Date 02/24/23 PURCH  %% Card 15 #602

DEBIT CARD WITHDRAWAL PURCHASE Spotify USA 877-7781161 NY Date 02/27/23 PURCH  %% Card 15 #6020 %% MCC 48

### Configuration

You can configure the behavior of the API by modifying the following environment variables:

OPENAI_API_KEY: Your OpenAI API key. Required.

PORT: The port on which the server will listen. Default is 3000.

### License
This project is licensed under the MIT License.
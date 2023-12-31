const Authorization =
  "Bearer eyJraWQiOiJnWlwvclBnV1RLVjBWbUFpWW52WVwvbUNaZUdxNXpHVVJDUWlpU0FUaHZyVjQ9IiwiYWxnIjoiUlMyNTYifQ.eyJzdWIiOiI2NDJlMTNjYS0yMmYzLTQ4ZjktYWMzMS02ZWE2ZGYzY2YwZDkiLCJldmVudF9pZCI6IjgyNGVmMzBiLWE3MjQtNDFiNi1hZjI5LWEyYzAzNGNlODE5NSIsInRva2VuX3VzZSI6ImFjY2VzcyIsInNjb3BlIjoiYXdzLmNvZ25pdG8uc2lnbmluLnVzZXIuYWRtaW4iLCJhdXRoX3RpbWUiOjE2ODgzODM1NDcsImlzcyI6Imh0dHBzOlwvXC9jb2duaXRvLWlkcC5hcC1zb3V0aC0xLmFtYXpvbmF3cy5jb21cL2FwLXNvdXRoLTFfQlFqQWVQbWVkIiwiZXhwIjoxNjg4NDY5OTQ3LCJpYXQiOjE2ODgzODM1NDcsImp0aSI6ImE3YWY1YzNiLTRhNDItNDQyYS1iZWU1LTJjOThmZjRlYTRjOSIsImNsaWVudF9pZCI6IjdqOWJyOTIxYWZmMGNzcHNlNnBqaGMydnA3IiwidXNlcm5hbWUiOiI2NDJlMTNjYS0yMmYzLTQ4ZjktYWMzMS02ZWE2ZGYzY2YwZDkifQ.NPWeq3Xw_QYWL9g6ZcPEmUwHdgO5Ly8twMUXbGOPweTXEuX0ykZTHF6PZ4Y1PukbRDjcHkz66IMW4Gx36lOrPfeM48JtInsNttA4Cpd9l48pzRjyeiVGzBhXi2c_XU-cjIkyFY2DFszWi7dN1Qxaq2_1yLWl8we3PR8XgWpwAeeFKPFAKhjpgRwVhUAlE0t3ypmHtOeEcMbN1zMVRi3DS64WPFjzrwQhHHFYqw7Igy2xLT14r26yQ3cEzn1ZY_880dpw9voYtn0sNvYEUksgBmXlNx3Y8J4KL-UuceWv9QgezqOUbAyHq9cO4R5UU5QpIubUK6F2bgc5P9NqCiyoDA";
const branchId = "4ff819ab-00ea-45b8-9544-205407c0680c";

export interface serviceParams {
  value: string;
  branchId?: string;
  page?: number;
  pageSize?: number;
}

function Searchservice() {
  const url = "https://prod-api.vegapay.tech/forex/account/search";
  const headers = {
    Authorization: Authorization,
    "Content-Type": "application/json",
  };

  const options = {
    method: "POST",
    headers: headers,
    body: "",
  };

  return async (body?: serviceParams) => {
    const params: serviceParams = {
      value: body?.value || "",
      branchId: body?.branchId || branchId,
      page: body?.page || 0,
      pageSize: body?.pageSize || 50,
    };
    options.body = JSON.stringify(params);

    try {
      return await fetch(url, options).then((res) => res.json());
    } catch (error: any) {
      return error.message;
    }
  };
}

export const SearchApi = Searchservice();

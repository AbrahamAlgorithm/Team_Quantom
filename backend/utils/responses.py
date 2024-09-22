from rest_framework.response import Response
from typing import Optional


def success_response(message: str, status_code: int, data: Optional[dict] = None):
    response: dict = {
        "status_code": status_code,
        "message": message,
    }
    if data is not None:
        response["data"] = data
    return Response(response, status_code=status_code)

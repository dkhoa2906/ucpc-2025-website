package vn.edu.uit.ucpc.authservice.dto.response;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class BaseResponse<T> {
    private String message;
    private T data;
}

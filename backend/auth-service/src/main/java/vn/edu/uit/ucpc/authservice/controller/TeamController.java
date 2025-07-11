package vn.edu.uit.ucpc.authservice.controller;

import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;
import vn.edu.uit.ucpc.authservice.dto.request.TeamInfoUpdateRequest;
import vn.edu.uit.ucpc.authservice.dto.response.BaseResponse;
import vn.edu.uit.ucpc.authservice.dto.response.UserData;
import vn.edu.uit.ucpc.authservice.entity.AppUser;
import vn.edu.uit.ucpc.authservice.service.AppUserService;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import vn.edu.uit.ucpc.authservice.dto.response.ErrorResponse; // Import ErrorResponse

@RequestMapping("/team")
@RequiredArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)
@RestController
public class TeamController {

    AppUserService appUserService;

    @Operation(summary = "Initial submission of team information")
    @ApiResponse(responseCode = "201", description = "Team information submitted successfully",
            content = @Content(mediaType = "application/json",
            schema = @Schema(implementation = BaseResponse.class)))
    @ApiResponse(responseCode = "404", description = "User not found",
            content = @Content(mediaType = "application/json",
            schema = @Schema(implementation = ErrorResponse.class)))
    @ApiResponse(responseCode = "409", description = "Team information already filled",
            content = @Content(mediaType = "application/json",
            schema = @Schema(implementation = ErrorResponse.class)))
    @PostMapping("/info")
    public ResponseEntity<BaseResponse<UserData>> initialTeamInfoSubmission(@AuthenticationPrincipal AppUser currentUser, @RequestBody TeamInfoUpdateRequest request) {
        return appUserService.initialTeamInfoSubmission(currentUser.getEmail(), request);
    }

    @Operation(summary = "Update team information")
    @ApiResponse(responseCode = "200", description = "Team information updated successfully",
            content = @Content(mediaType = "application/json",
            schema = @Schema(implementation = BaseResponse.class)))
    @ApiResponse(responseCode = "404", description = "User or Team not found",
            content = @Content(mediaType = "application/json",
            schema = @Schema(implementation = ErrorResponse.class)))
    @ApiResponse(responseCode = "409", description = "Team information not yet filled",
            content = @Content(mediaType = "application/json",
            schema = @Schema(implementation = ErrorResponse.class)))
    @PutMapping("/update-info")
    public ResponseEntity<BaseResponse<UserData>> updateTeamInfo(@AuthenticationPrincipal AppUser currentUser, @RequestBody TeamInfoUpdateRequest request) {
        return appUserService.updateTeamInfo(currentUser.getEmail(), request);
    }

    @Operation(summary = "Get team information")
    @ApiResponse(responseCode = "200", description = "Team information retrieved successfully",
            content = @Content(mediaType = "application/json",
            schema = @Schema(implementation = BaseResponse.class)))
    @ApiResponse(responseCode = "404", description = "User not found",
            content = @Content(mediaType = "application/json",
            schema = @Schema(implementation = ErrorResponse.class)))
    @GetMapping("/info")
    public ResponseEntity<BaseResponse<UserData>> getTeamInfo(@AuthenticationPrincipal AppUser currentUser) {
        return appUserService.getTeamInfo(currentUser.getEmail());
    }
}
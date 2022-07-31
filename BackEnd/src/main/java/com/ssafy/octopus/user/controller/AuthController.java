package com.ssafy.octopus.user.controller;

import com.ssafy.octopus.user.entity.User;
import com.ssafy.octopus.user.entity.UserDto;
import com.ssafy.octopus.user.jwt.JwtTokenProvider;
import com.ssafy.octopus.user.service.AuthService;
import com.ssafy.octopus.user.service.AuthServiceImpl;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

/*
* Write by SJH
* */
@RestController
@RequestMapping("/Auth")
public class AuthController {

    @Autowired
    private AuthService service = new AuthServiceImpl();

    @Autowired
    private JwtTokenProvider jwtTokenProvider;

    @Operation(summary = "Auth", description = "auth / login api")
    @ApiResponses({
            @ApiResponse(responseCode = "200", description = "OK !!"),
            @ApiResponse(responseCode = "400", description = "BAD REQUEST !!"),
            @ApiResponse(responseCode = "404", description = "NOT FOUND !!"),
            @ApiResponse(responseCode = "500", description = "INTERNAL SERVER ERROR !!")
    })
    @GetMapping("/api")
    public String test(){
        System.out.println("AuthController : test fun");
        return "test fun";
    }

    @PostMapping("/login") // 로그인
    public ResponseEntity<UserDto> login(@RequestBody UserDto dto){
        System.out.println("login : " + dto);
        User user = service.findByUserIdAndUserPw(dto.getUserId(), dto.getUserPW());
        String token = null;
        UserDto result = new UserDto();

        if(user == null){ // 데이터가 없을 경우
            return new ResponseEntity<>(result, HttpStatus.NOT_FOUND);
        }
        else{ // 정상 처리 되었을 경우
            result.setIdx(user.getIdx());
            result.setUserName(user.getUserName());
            result.setUserId(user.getUserId());
            token = jwtTokenProvider.createToken(user.getUserId());
            result.setToken(token);
            return new ResponseEntity<>(result, HttpStatus.OK);
        }

    }
}

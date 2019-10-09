package com.example.rest.hello;

import org.springframework.web.bind.annotation.*;

import java.util.concurrent.atomic.AtomicLong;

@RestController
public class GreetingController {

    private static final String template = "Hello %s!";
    private final AtomicLong counter = new AtomicLong();


    @RequestMapping(value = "greeting", method = RequestMethod.POST)
    public Greeting greeting(@RequestParam(value = "name", defaultValue = "World") String name){

        return new Greeting(counter.incrementAndGet(), String.format(template, name));
    }

    @GetMapping("/greeting-javaConfig")
    public Greeting greetingWithJavaConfig(@RequestParam(required=false, defaultValue="World") String name) {
        System.out.println("==== in greeting ====");
        return new Greeting(counter.incrementAndGet(), String.format(template, name));
    }

}

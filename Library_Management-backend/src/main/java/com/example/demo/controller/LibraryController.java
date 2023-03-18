package com.example.demo.controller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.example.demo.model.Library;
import com.example.demo.repository.LibraryRepository;
import java.util.Optional;

@CrossOrigin("*")
@RestController
@RequestMapping("/library")
public class LibraryController {

    @Autowired
    private LibraryRepository libraryRepository;

    @GetMapping
    public Iterable<Library> getAllEmployees(){
        return libraryRepository.findAll();
    }

    @PostMapping
    public Library createEmployee(@RequestBody Library Lib) {
        return libraryRepository.save(Lib);
    }

    @GetMapping("{id}")
    public ResponseEntity<Optional<Library>> getEmployeeById(@PathVariable  int id){
        Optional<Library> employee = libraryRepository.findById(id);
        return ResponseEntity.ok(employee);
    }

    @PutMapping("{id}")
	public Library updateBookDetails(@RequestBody Library b)
	{
		System.out.println("Changes Made Have Been Successfully Updated");
		return libraryRepository.save(b);		
	}
    @DeleteMapping("{id}")
	public String deleteDetails(@PathVariable int id)
	{
    	libraryRepository.deleteById(id);
		return "Id : "+id+" is deleted";
	}
    @DeleteMapping
    public String deleteAllDetails()
    {
    	libraryRepository.deleteAll();
    	return "All Books deleted";
    }
}
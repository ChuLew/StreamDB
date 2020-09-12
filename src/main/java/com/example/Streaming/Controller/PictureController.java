package com.example.Streaming.Controller;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.Collection;
import java.util.Optional;
import javax.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.example.Streaming.Model.Picture;
import com.example.Streaming.Reposoitory.PictureRepository;


@RestController
@CrossOrigin

@RequestMapping("/api")
public class PictureController {
	
		private PictureRepository pictureRepository;

		public PictureController(PictureRepository pictureRepository) {
			super();
			this.pictureRepository = pictureRepository;
		}
		
		
		@GetMapping("/pictures")
		Collection<Picture> pictures(){
			return  pictureRepository.findAll();
		}
		
		@GetMapping("/pictures/{id}")
		ResponseEntity<?> getPicture(@PathVariable Long id){
		Optional<Picture> picture = pictureRepository.findById(id);
		 return picture.map(response -> ResponseEntity.ok().body(response))
				 .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
		 
		}
		
		@PostMapping("/pictures")
		ResponseEntity<Picture> createPicture(@Valid @RequestBody Picture picture) throws URISyntaxException{
			Picture result= pictureRepository.save(picture);
		  return ResponseEntity.created(new URI("/pictures" + result.getId())).body(result); 
		
		}
		
		
		@PutMapping("/pictures/{id}")
		ResponseEntity<Picture> updatePictures(@Valid @RequestBody Picture picture){
			Picture result= pictureRepository.save(picture);
			return ResponseEntity.ok().body(result);
		}
		
		
		
		@DeleteMapping("/pictures/{id}")
		ResponseEntity<?> deletePicture(@PathVariable Long id){
			pictureRepository.deleteById(id);
			return ResponseEntity.ok().build();
		}
		
		
}


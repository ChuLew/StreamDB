package com.example.Streaming.Reposoitory;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.Streaming.Model.Picture;

@Repository
public interface PictureRepository extends JpaRepository<Picture,Long>{

}

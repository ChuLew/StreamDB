package com.example.Streaming.Reposoitory;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.Streaming.Model.Stream;

@Repository
public interface StreamRepository extends JpaRepository<Stream,Long>{

}

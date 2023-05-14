package dev.bazzi.JewelryBazzi.Controller;

import dev.bazzi.JewelryBazzi.Model.Jewelry;
import dev.bazzi.JewelryBazzi.Service.JewelryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/jewelry")
@CrossOrigin("*")
public class JewelryController {
@Autowired
    JewelryService jewelryService;

@GetMapping("/all")
    public ResponseEntity<List<Jewelry>> GetAllJewel(){
   List<Jewelry> jewelry=jewelryService.AllJewel();
    return new ResponseEntity<>(jewelry, HttpStatus.OK);
    }
    @PutMapping("/update/{id}")
    public ResponseEntity<Jewelry> updateProduct(@PathVariable int id, @RequestBody Jewelry product) {
        Jewelry jewelry=jewelryService.updateJewelry(id,product);
        return new ResponseEntity<>(jewelry, HttpStatus.CREATED);
    }

    @PostMapping("/create")
    public ResponseEntity<Jewelry> CreateProduct( @RequestBody Jewelry product) {
        Jewelry jewelry=jewelryService.createJewelry(product);
        return new ResponseEntity<>(jewelry, HttpStatus.CREATED);
    }
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> DeleteProduct(@PathVariable("id") int id){
jewelryService.deleteProduct(id);
return new ResponseEntity<>(HttpStatus.OK);

    }
}

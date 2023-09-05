<?php

namespace App\Models;

use App\Models\Medecin;
use App\Models\Operation;
use App\Models\Infermiere;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Employe extends Model
{
    protected $fillable=["TypeEmploye","Nom","Prenom","Email","Tel"];
    public function Medecin(){
        return 	$this->HasOne(Medecin::class);
    }
    public function operations(){
        return 	$this->BelongsToMany(Operation::class);
    }
    public function infermiere(){
        return 	$this->HasOne(Infermiere::class);
    }
}

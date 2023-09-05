<?php

namespace App\Models;

use App\Models\Employe;
use App\Models\Departement;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Infermiere extends Model
{
    protected $fillable=["idDep","idEmp","Nom"];
    public function employe(){
        return 	$this->BelongsTo(Employe::class);
    }
    public function departement(){
        return 	$this->BelongsTo(Departement::class);
    }
}

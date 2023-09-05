<?php

namespace App\Models;

use App\Models\Employe;
use App\Models\Patient;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Medecin extends Model
{
    protected $fillable=["Matricule","Tarif","Specialite","Service","idEmp"];
    public function patients(){
        return 	$this->hasMany(Patient::class);
    }
    public function employe(){
        return 	$this->BelongsTo(Employe::class);
    }
}

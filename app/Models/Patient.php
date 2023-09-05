<?php

namespace App\Models;

use App\Models\Medecin;
use App\Models\Consultation;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Patient extends Model
{
    protected $primaryKey = 'idpatient';
    protected $fillable=["idpatient","Nom","Prenom","Email","Tel","CIN","Adresse","Medecin"];
    public function Medecin(){
        return 	$this->belongsTo(Medecin::class);
    }
    public function consultations(){
        return 	$this->hasMany(Consultation::class);
    }
}

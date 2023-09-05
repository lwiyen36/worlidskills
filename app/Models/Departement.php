<?php

namespace App\Models;

use App\Models\Infermiere;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Departement extends Model
{
    protected $fillable=["NomDepartement"];
    public function infermieres(){
        return 	$this->hasMany(Infermiere::class);
    }
}

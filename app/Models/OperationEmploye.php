<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class OperationEmploye extends Model
{
    protected $fillable=["idEmploye","idOperation"];
}

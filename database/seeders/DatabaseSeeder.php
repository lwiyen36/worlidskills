<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use App\Models\Employe;
use Illuminate\Support\Str;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        
        
        Employe::create([
            "TypeEmploye"=>"Admin",
            "Nom"=>"Admin",
            "Prenom"=>"Admin",
            "Email"=>"admin@hospital.test",
            "Tel"=>"06879578"
        ]);
        Employe::create([
            "TypeEmploye"=>"Medecin",
            "Nom"=>"Medecin",
            "Prenom"=>"Medecin",
            "Email"=>"medecin@hospital.test",
            "Tel"=>"06879578"
        ]);
        Employe::create([
            "TypeEmploye"=>"Infermiere",
            "Nom"=>"Infermiere",
            "Prenom"=>"Infermiere",
            "Email"=>"infermiere@hospital.test",
            "Tel"=>"06879578"
        ]);
        Employe::create([
            "TypeEmploye"=>"Assistant",
            "Nom"=>"assistant",
            "Prenom"=>"assistant",
            "Email"=>"assistant@hospital.test",
            "Tel"=>"06879578"
        ]);
        \App\Models\User::factory()->create([
            'name' => fake()->name(),
            'email' => 'admin@hospital.test',
            'email_verified_at' => now(),
            'password' => Hash::make('1234'), // password
            'remember_token' => Str::random(10),
        ]);
        \App\Models\User::factory()->create([
            'name' => fake()->name(),
            'email' => 'medecin@hospital.test',
            'email_verified_at' => now(),
            'password' => Hash::make('1234'), // password
            'remember_token' => Str::random(10),
        ]);
        \App\Models\User::factory()->create([
            'name' => fake()->name(),
            'email' => 'assistant@hospital.test',
            'email_verified_at' => now(),
            'password' => Hash::make('1234'), // password
            'remember_token' => Str::random(10),
        ]);
        \App\Models\User::factory()->create([
            'name' => fake()->name(),
            'email' => 'infermiere@hospital.test',
            'email_verified_at' => now(),
            'password' => Hash::make('1234'), // password
            'remember_token' => Str::random(10),
        ]);
    }
}

<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Employe;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthentificationController extends Controller
{
    public function Login(Request $request){

        if(!Auth::attempt(["email"=>$request->email,"password"=>$request->password])){
            return response()->json(['message'=>"Email Ou Mot de Passe Inccorect"],422);
        }
        $user=Auth::user();
        $token=$user->createToken('main')->plainTextToken;
        $role=Employe::where('Email',$user->email)->get()[0]->TypeEmploye;
        return response()->json(compact('token','user','role'));
    }
    public function getRole($email){
        $role=Employe::where('Email',$email)->get()[0]->TypeEmploye;
        return response()->json(['role'=>$role]);
    }
}
